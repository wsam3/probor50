require('dotenv').config()

// Util
const ora = require('ora')
const config = require('./config')
const fs = require('fs')

// Slash Commands
const { Client, Collection } = require('discord.js')
const slash = require('./src/util/slash')

const intentsLoader = ora('Registering Intents').start()

// Checks
let finalIntents = []
if (!Array.isArray(config.bot.intents)) {
  intentsLoader.warn(
    'Intents in config file must be in an array, default intents will be used'
  )
} else {
  finalIntents = config.bot.intents
  intentsLoader.succeed('Loaded intents successfully from the config file')
}

const client = new Client({ intents: finalIntents })
const {DisTube} = require('distube')
// CLI
client.distube =new DisTube(client,{
  searchSongs:1,
  leaveOnEmpty:false
})
client.search =new DisTube(client,{
  searchSongs:5,
  leaveOnEmpty:false
})
// Commands
client.commands = new Collection()

const events = fs
  .readdirSync('./src/events')
  .filter(file => file.endsWith('.js'))

events.forEach(event => {
  const eventFile = require(`./src/events/${event}`)
  if (eventFile.oneTime) {
    client.once(eventFile.event, (...args) => eventFile.run(...args,client))
  } else {
    client.on(eventFile.event, (...args) => eventFile.run(...args,client))
  }
})
// process.on("unhandledRejection", error => {
//   return ;
//   });





const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
.on('addSong', (queue, song) =>
    queue.textChannel.send(
      `:white_check_mark: | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send(
      `:white_check_mark:  | Added \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) to queue\n${status(queue)}`
    )
  )
  .on('error', (channel, e) => {
    channel.send(`:x: | An error encountered: ${e.toString().slice(0, 1974)}`)
    console.error(e)
  })
  .on('empty', channel => channel.send('Voice channel is empty! Leaving the channel...'))
  .on('searchNoResult', (interaction, query) =>
    interaction.channel.send(`:x: | No result found for \`${query}\`!`)
  )

client.login(config.bot.token)
