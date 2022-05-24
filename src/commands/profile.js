const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("you info profile as your BIO or level or any thing also")
    .addUserOption(o => o.setName('user').setDescription('Mention some one ')),
  run: async (interaction) => {
    
  },
};
