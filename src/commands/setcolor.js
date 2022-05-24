const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("setcolor")
    .setDescription("change your role color")
    .addStringOption(o => o.setName('color').setDescription('color name')),
  run: async (interaction) => {

      
  },
};
