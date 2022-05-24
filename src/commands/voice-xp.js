const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("rank")
    .setDescription("info about your voice xp and text xp")
    .addUserOption(o => o.setName('user').setDescription('Mention some one ')),
  run: async (interaction) => {

    
  },
};
