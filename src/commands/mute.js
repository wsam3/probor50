const { SlashCommandBuilder, time } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const db = require('quick.db');
const timer = require('Timer-string');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("mute some on from text channels")
    .addMentionableOption(o => o.setName('user').setDescription('mention to give mute'))
    .addStringOption(o=> o.setName('time').setDescription('Set Time Out To Remove Muted Role')),
  run: async (interaction) => {
    let mute = 'Muted'
    const user = interaction.options.getMentionable('user',true)
    const role = interaction.guild.roles.cache.find(r => r.name === mute)
    const time = interaction.options.getString('time')
    if(!role){
      let e = interaction.guild.roles.create({name: 'Super Cool Blue People'}).then((rolee)=>{
      if(!e)return interaction.reply(`I can't create roles please cheack my permissions`)
      let d = interaction.guild.channels.forEach(channel => {
        if(channel.type == "GUILD_TEXT"){
          channel.permissionOverwrites.set({
            id: rolee.id,
            deny: [Permissions.FLAGS.SEND_MESSAGES],
          },
          )
      }
        
      });
      // if(!d)return interaction.reply(`i can't edit channels please cheack my permissions`)
      let s = user.roles.add(role)
      if(!s)return interaction.reply(`i can't add roles please cheack my permissions`)})
    }else{
      if(user.roles.cache.find(r=> r === role || r.name === role.name)){
        user.roles.remove(role)
        interaction.reply(`**:white_check_mark: @${user.user.username} unmuted from the text channels! **`)
      }else{
    user.roles.add(role)
    interaction.reply(`**:white_check_mark: @${user.user.username} muted from the text channels! **`).then(()=>{
      if(time){
    setTimeout(()=>{
      user.roles.remove(role)
    },timer.stringToMilliseconds(time))
  }else return;
    })
    
  }
}
  },
};
