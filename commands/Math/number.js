const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("number")
  .setDescription("隨機取得一個1~100間的數字");

module.exports = { data };
