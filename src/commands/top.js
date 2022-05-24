const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("top")
    .setDescription("unmute some one")
    .addStringOption(o=> o.setName('ddmmyy').setDescription('choise from day or month or year')
    .setRequired(true)
    .addChoice('day', 'gif_funny')
    .addChoice('month', 'gif_meme')
    .addChoice('year', 'gif_movie')
),
  run: async (interaction) => {

    
  },
};
