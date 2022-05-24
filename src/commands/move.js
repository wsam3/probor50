const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("move")
    .setDescription("move some one to voice channel")
    .addChannelOption(o => o.setName('channel').setDescription('mention channel'))
    .addMentionableOption(o => o.setName('user').setDescription('mention user')),
  run: async (interaction) => {
    const channel = interaction.options.getChannel('channel')
    const user = interaction.options.getMentionable('user')
    if(channel.type === 'GUILD_VICE'){
      user.voice.setChannel(channel)
      interaction.reply(`**:white_check_mark:  ${user.username} Moved To ${channel.name}**`)
    }else return interaction.reply(`Please Mention Voice Channel Only`)
  },
};
