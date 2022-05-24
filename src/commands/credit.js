const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("credit")
    .setDescription("Give someone credits or show how much credit you have")
    .addUserOption(o => o.setName('user').setDescription('mention member'))
    .addNumberOption(o => o.setName('amount').setDescription('number'))
    .addStringOption(o=> o.setName(`comment`).setDescription(`send comment to him`)),
  run: async (interaction) => {
    const user = interaction.options.getUser('user');const number = interaction.options.getNumber('amount');const comment = interaction.options.getString('comment');
    if(user){
      if(!number){
        if(comment)return interaction.reply(`**Please Mention A member To Transfer**`);
      const useri = db.get(`credits_${user.id}`);
      if(useri === null)  {
      interaction.reply(`**:bank: | ${user.username},He Has \`$0\`.**`)
    }else{
      interaction.reply(`**:bank: | ${user.username},He Has \`$${useri}\`.**`)}}else{
      const ui = db.get(`credits_${interaction.member.id}`)
      if(ui!==number||ui<number)return interaction.reply(`**:interrobang: | ${interaction.user.username} , type the credit you need to transfer!**`)
      db.subtract(`credits_${interaction.member.id}`,number)
      db.add(`credits_${user.id}`,number)
      interaction.reply(`**:moneybag:|Has Been Transferred ${number} to ${user}**`)
    }
    }else{
      const useri = db.get(`credits_${interaction.member.id}`)
      if(useri === null) return interaction.reply(`**:bank: | ${interaction.user.username},You Have \`$0\`.**`)
      interaction.reply(`**:bank: | ${interaction.user.username},You Have \`$${useri}\`.**`)
    }
  },
};
