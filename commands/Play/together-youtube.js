const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("together-youtube")
  .setDescription("和朋友一起在語音頻道觀賞Youtube影片");

module.exports = { data };
