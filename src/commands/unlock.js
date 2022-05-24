const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("unlock")
    .setDescription("givr yourself color role")
    .addNumberOption(o => o.setName('color').setDescription('color number')),
  run: async (interaction) => {

      
  },
};
