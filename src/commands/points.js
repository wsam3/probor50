const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("points")
    .setDescription("give some one points ")
    .addMentionableOption(o=> o.setName('user').setDescription('Mention User '))
    .addNumberOption(o => o.setName('points').setDescription('points number')),
  run: async (interaction) => {
    if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply(`This Command for \`ADMINISTRATOR\``)
    const user = interaction.options.getMentionable('user')
    const points = interaction.options.getNumber('points')
    if(!user){
      if(!points){
        const get = db.get(`points_${interaction.member.id}_${interaction.guild.id}`)
        interaction.reply(`He's Points Is \`${get}\``)
      }else{
        interaction.reply(`:x:|Mention User To Give Him Points `)
      }
    }else{
      if(!points){
        const get = db.get(`points_${user.id}_${interaction.guild.id}`)
        interaction.reply(`Your Points Is \`${get}\``)
      }else{
        db.add(`points_${user.id}_${interaction.guild.id}`,points)
        interaction.reply(`**:sparkles:  ${user.user.username} Added New Points \`${points}\`.**`)
      }
    }
  },
};
