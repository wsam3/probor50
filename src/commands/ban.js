const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("bans a member")
    .addMentionableOption(o => o.setName('user').setDescription('Mention some one '))
    .addStringOption(o => o.setName('resoon').setDescription('write resoon'))
    ,
  run: async (interaction) => {
      const user = interaction.options.getMentionable(`user`)
      const res = interaction.options.getString(`resoon`)
      user.ban({resoon:`${res}`})
      interaction.reply(`**${user.user.username} has been banned **`)  
  },
};
