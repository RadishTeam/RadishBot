const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("resume")
  .setDescription("讓機器人繼續當前音樂");

module.exports = { data };
