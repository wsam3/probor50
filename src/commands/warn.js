const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("warn some one")
    .addUserOption(o => o.setName('user').setDescription('user'))
    .addStringOption(o=> o.setName('resoon').setDescription('if you want to say somethig to him')),
  run: async (interaction) => {
      
  },
};
