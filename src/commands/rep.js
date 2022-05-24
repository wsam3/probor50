const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("rep")
    .setDescription("givr yourself color role")
    .addUserOption(o => o.setName('user').setDescription('user'))
    .addIntegerOption(o=> o.setName('number').setDescription('Write Number')),
  run: async (interaction) => {

  },
};
