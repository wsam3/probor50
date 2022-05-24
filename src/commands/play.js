const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("play a song ")
    .addStringOption(o => o.setName('song').setDescription('song name or URL').setRequired(true)),
  run: async (interaction,client) => {
    const string = interaction.options.getString('song',true)
    if (!string) return interaction.reply(`:x:| Please enter a song url or query to search.`)
    let queue = client.distube.getQueue(interaction);
    interaction.reply(`Loading...`)
    client.distube.play(interaction.member.voice.channel, string, {
      member: interaction.member,
      textChannel: interaction.channel,
      interaction
    })
  },
};
