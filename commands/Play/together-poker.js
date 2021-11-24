const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("together-poker")
  .setDescription("和朋友一起在語音頻道玩Poker遊戲");

module.exports = { data };
