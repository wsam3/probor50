const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("setnick")
    .setDescription("change or reset members/your name")
    .addUserOption(o => o.setName('user').setDescription('member'))
    .addStringOption(o => o.setName('name').setDescription('user name')),
  run: async (interaction) => {

      
  },
};
