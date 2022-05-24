const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("color")
    .setDescription("givr yourself color role")
    .addNumberOption(o => o.setName('color').setDescription('color number')),
  run: async (interaction) => {
    const ar = [Permissions.FLAGS.ADMINISTRATOR||Permissions.FLAGS.BAN_MEMBERS||Permissions.FLAGS.DEAFEN_MEMBERS||Permissions.FLAGS.MANAGE_CHANNELS||Permissions.FLAGS.MANAGE_GUILD||Permissions.FLAGS.MANAGE_MESSAGES||Permissions.FLAGS.MANAGE_ROLES]
    const color = interaction.options.getNumber('color');
    const findr = interaction.guild.roles.cache.find(r=> r.name === color)
    if(!findr)return interaction.reply(`I can't Find ${color}`)
    if(findr.permissions.has(ar))return interaction.reply(`This Role Has Permissions For Admins Only`)
    interaction.member.roles.add(color)
    interaction.reply(color.name+`Added To Your Roles`)
  },
};
