const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {

  data: new SlashCommandBuilder()
    .setName("np")
    .setDescription("now playing song"),
  run: async (interaction,client) => {
    if (!interaction.member.voice.channel)
      return interaction.reply(`_\`Connect to voice ._`);
    if (interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply(`_You must be in :_ **${interaction.guild.me.voice.channel.name}**`);  
    let queue = client.distube.getQueue(interaction);
    if (!queue) return interaction.reply(`_\`Not must be playing .._`)
    queue.songs.map((song, id) =>
        `${song.name} - \`${song.formattedDuration}\``
      ).slice(0, 1).join("\n")
      let song = (queue.songs.map((song, id) =>
        `${song.name}`
      ).slice(0, 1).join("\n"))
     let duration = (queue.songs.map((song, id) =>
        `${song.formattedDuration}`
      ).slice(0, 1).join("\n")) 
      let user = (queue.songs.map((song, id) =>
      `${song.user.username}`
    ).slice(0, 1).join("\n")) 
      let vol = (`${queue.volume}`) 
      interaction.reply(`_Playing now :_ **${song}**\n_Requested by :_ **${user}**\n_Duration_ : **(${duration})**\n_Volume_ : **${vol}**`)
 
  },
};
