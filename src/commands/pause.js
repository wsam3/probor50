const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("pause a playing song"),
  run: async (interaction,client) => {
    const queue = client.distube.getQueue(interaction)
    if (!queue) return interaction.reply(`:x: | There is nothing in the queue right now!`)
    if (queue.pause){
      return interaction.reply('the song already paused')
    }
    queue.pause()
    interaction.reply('Paused the song for you :)')
  },
};
