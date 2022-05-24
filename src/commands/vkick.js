const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("vkick")
    .setDescription("voice kick")
    .addUserOption(o => o.setName('user').setDescription('mention a user')),
  run: async (interaction) => {

      
  },
};
