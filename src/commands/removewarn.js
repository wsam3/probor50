const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("removewarn")
    .setDescription("remove warn form some one")
    .addMentionableOption(o => o.setName('user').setDescription('warn id ').setRequired(true)),
  run: async (interaction) => {
    const user = interaction.options.getMentionable('user')
    let num = 0
    const get = db.fetchAll(`warn_${user.id}`).forEach(a=>{
      db.delete(a)
    })
  },
};
