const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("make me chice to you a random number")
    .addIntegerOption(o=>o.setName('number').setDescription('picks a random number')),
  run: async (interaction) => {
    const number  = interaction.options.getInteger('number')
    if(number)return interaction.reply(number+'.')
    var rn = require('random-number');
var options = {
  min:  1
, max:  100
, integer: true
}

    interaction.reply(`${rn(options)}`)
  },
};
