const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
   data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("User/Your Avatar")
    .addMentionableOption(o=>o.setName('input').setDescription('Mention User')),
    run: async (interaction) => {
      const user = interaction.options.getMentionable('input');
        if(!user){
        const embed = new MessageEmbed()
        .setAuthor(interaction.member.displayName)
        .setTitle(`AvatarURL`)
        .setURL(interaction.user.displayAvatarURL({dynamic:true,size:1024}))
        .setImage(interaction.user.displayAvatarURL({dynamic:true,size:1024}))
        interaction.reply({embeds:[embed]})
      }else{
        const embed = new MessageEmbed()
        .setAuthor(user.displayName)
        .setTitle(`AvatarURL`)
        .setURL(user.user.displayAvatarURL({dynamic:true,size:1024}))
        .setImage(user.user.displayAvatarURL({dynamic:true,size:1024}))
        interaction.reply({embeds:[embed]})
      }
  },
};
