const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("server info"),
  run: async (interaction) => {
    const embed = new Discord.MessageEmbed()
    .addField(`**:id: Server ID:**`,interaction.guild.id,true)
    .addField(`**:calendar: Created On**`,interaction.guild.createdAt,true)
    .addField(`**:crown: Owned by**`,interaction.guild.fetchOwner(),true)
    .addField
  },
};
