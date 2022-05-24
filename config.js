const { Intents } = require("discord.js");

const config = {
  bot: {
    token: "ODcyNTY0Nzg3OTg3NDg0NzIz.YQrtSA.aF33s2eowS5_x9MTIsQ6X_WRJ6c",
    intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES ,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_VOICE_STATES], // You can find the available intents on https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS
    guildId: "",
    },
};

module.exports = config;
