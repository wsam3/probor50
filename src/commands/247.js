const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("247")
    .setDescription("keep bot in self voice channel")
    .addStringOption(o=>o.setName('input').setDescription('User ID/Name Or Channel ID/Name')),
    run: async (interaction) => {
      const vip = db.get(`vip_server_${interaction.guild.id}`)
      if(!vip)return interaction.reply(`This Plan Is \`Free\` You Need To Upgrade a Plan`)
      const string = interaction.options.getString('input');
      const member = interaction.guild.members.cache.find(o => o.id ===string||o.name === string ||o === string)
      if(!member)return interaction.reply(`I Can't Find This Member`)
      if(!member.voice.channel)return interaction.reply(`This Member Is Not In Voice Channel`)
      let voice = member.voice.channel.id
      const connection = joinVoiceChannel({
        channelId: voice,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
      });
      if(!connection)return interaction.reply(`I Can't Join This Voice Channel`)
  },
};
