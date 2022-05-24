const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("search")
    .setDescription("search about songs")
    .addStringOption(o => o.setName('song').setDescription('song name')),
  run: async (interaction,client) => {
    const song = interaction.options.getString('song')
    client.search.play(interaction.member.voice.channel,song,{
      member: interaction.member,
      textChannel: interaction.channel,
      interaction
    })
  },
};
