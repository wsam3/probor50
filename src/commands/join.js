const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("to join voice channel"),
  run: async (interaction) => {
      const voice = interaction.member.voice.channel;
      if(!voice)return interaction.reply(`join Voice Channel Please`)
      const con = joinVoiceChannel({
        channelId: voice.id,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
    });
    if(!con)return interaction.reply(`I Can't Content To This Voice Channel`)
    interaction.reply(`Joined To ${voice}`)
  },
};
