const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("id")
    .setDescription("to show user/your server rank")
    .addUserOption(o => o.setName('user').setDescription('user')),
  run: async (interaction) => {

      
  },
};
