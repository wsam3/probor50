const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("title")
    .setDescription("title on your profile")
    .addStringOption(o => o.setName('title').setDescription('title')),
  run: async (interaction) => {

      
  },
};
