const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("moveme")
    .setDescription("move yourself to voice channel")
    .addStringOption(o => o.setName('channel').setDescription('write channle name or user name in voice channel')),
  run: async (interaction) => {
    const voice = interaction.options.getString('channel')
    const search  = interaction.members.cache.find(o=> o.name )
  },
};
