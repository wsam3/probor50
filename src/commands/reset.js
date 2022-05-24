const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("reset")
    .setDescription("givr yourself color role")
    .addStringOption(o=> o.setName('reset').setDescription('choice from options').setRequired(true)
    .addChoice('text', 'reset_text')
    .addChoice('voice', 'reset_voice')
    .addChoice('all', 'all_text_and_voice')
),
  run: async (interaction) => {
    const reset = interaction.options.getString('reset')
    if(reset === 'text'){
      interaction.guild.members.cache.forEach(member => {
        db.delete(`text_xp${member.id}_${interaction.guild.id}`)
      });
      interaction.reply(`Done Reset All Members From Text xp`)
    }
    if(reset === 'voice'){
      interaction.guild.members.cache.forEach(member => {
        db.delete(`voice_xp${member.id}_${interaction.guild.id}`)
      });
      interaction.reply(`Done Reset All Members From Voice xp`)
    }
    if(reset === 'all'){
      interaction.guild.members.cache.forEach(member => {
        db.delete(`voice_xp${member.id}_${interaction.guild.id}`)
      });
      interaction.guild.members.cache.forEach(member => {
        db.delete(`text_xp${member.id}_${interaction.guild.id}`)
      });
      interaction.reply(`Done Reset All Members From All xp`)
    }
  },
};
