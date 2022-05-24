const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kicks a member")
    .addMentionableOption(o=> o.setName('user').setDescription(`mention member`).setRequired(true)),
  run: async (interaction) => {
    const member = interaction.options.getMentionable(`user`)
    await member.kick()
    interaction.reply(`Done Kicked To ${member}`)
  },
};
