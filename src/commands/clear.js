const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("clear messages like you need")
    .addNumberOption(o => o.setName('amount').setDescription('write number only')),
  run: async (interaction) => {
      let amount = interaction.option.getNumber('amount');
      
          if (amount > 100||!amount) {
            amount = 100;
        }
        await interaction.channel.bulkDelete(amount, true).then((_message) => {
            interaction.reply(`Bot cleared \`${_message.size}\` messages |✅`).then((sent) => {
            setTimeout(function() {
              sent.delete();
            }, 2500);
          });
        });
        interaction.reply('enter the amount of messages that you would like to clear').then((sent) => {
          setTimeout(function() {
            sent.delete();
          }, 2500);
        });
    
  },
};
