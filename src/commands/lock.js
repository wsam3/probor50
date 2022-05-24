const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("lock this channel")
    .addChannelOption(o => o.setName('channel').setDescription('mention any channel')),
  run: async (interaction) => {
    interaction.channel.permissionOverwrites.edit(interaction.guild.id,{ SEND_MESSAGES: false})
    interaction.reply(`**:lock: ${interaction.channel} has been locked.**`)
  },
};
