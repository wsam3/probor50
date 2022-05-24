const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("your/user info")
    .addUserOption(o => o.setName('user').setDescription('User')),
  run: async (interaction) => {

      
  },
};
