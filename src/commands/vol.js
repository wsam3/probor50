const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("vol")
    .setDescription("voice music vol")
    .addNumberOption(o => o.setName('vol').setDescription('number')),
  run: async (interaction) => {

      
  },
};
