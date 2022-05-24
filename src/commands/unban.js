const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("unban some one")
    .addUserOption(o => o.setName('user').setDescription('Mention some one')),
  run: async (interaction) => {

    
  },
};
