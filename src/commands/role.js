const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription("give some one any role you need")
    .addMentionableOption(o => o.setName('member').setDescription('mention member').setRequired(true))
    .addRoleOption(o=> o.setName('role').setDescription(`Mention The Role`)),
  run: async (interaction) => {
    const member = interaction.options.getMentionable(`member`);
    const role = interaction.options.getRole('role')
    member.roles.add(role)
    interaction.reply(`${role.name} Gived To ${member.user.username}`)
  },
};
