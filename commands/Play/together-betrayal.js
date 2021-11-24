const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("together-betrayal")
  .setDescription("和朋友一起在語音頻道玩Betrayal遊戲");

module.exports = { data };
