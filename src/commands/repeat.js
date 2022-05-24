const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("repeat")
    .setDescription("loop/repeat song")
    .addStringOption(o => o.setName('type').setDescription('loop/repeat type').setRequired(true)
    .addChoice('this_song', 'repeat this song only')
    .addChoice('queue', 'repeat al queue')
    .addChoice('off', 'don\'t repeat any')),
  run: async (interaction,client) => {
    const args = interaction.options.getString('type')
    const queue = client.distube.getQueue(interaction)
    if (!queue) return interaction.reply(`${client.emotes.error} | There is nothing playing!`)
    let mode = null
    if(args === 'off'){ mode = 0
      mode = queue.setRepeatMode(mode)
      mode = mode ? (mode === 2 ? 'Repeat queue' : 'Repeat song') : 'Off'
      interaction.reply(`:repeat: | Set repeat mode to \`${mode}\``)
    }
    if(args === 'this_song'){ mode = 1
      mode = queue.setRepeatMode(mode)
      mode = mode ? (mode === 2 ? 'Repeat queue' : 'Repeat song') : 'Off'
      interaction.reply(`:repeat: | Set repeat mode to \`${mode}\``)
    }
    if(args === 'queue'){ mode = 2
      mode = queue.setRepeatMode(mode)
      mode = mode ? (mode === 2 ? 'Repeat queue' : 'Repeat song') : 'Off'
      interaction.reply(`:repeat: | Set repeat mode to \`${mode}\``)
    }
        
    

  },
};
