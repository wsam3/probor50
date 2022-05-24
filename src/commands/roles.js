const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("roles")
    .setDescription("roles names in this server"),
  run: async (interaction) => {
    const roles = interaction.guild.roles.cache.map(role=>`${role.name}`).join('\n')
    interaction.reply(`\`\`\`${roles}\`\`\``)
  },
};
