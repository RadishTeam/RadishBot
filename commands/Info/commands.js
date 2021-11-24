const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("commands")
  .setDescription("機器人會告訴您機器人的指令清單");

module.exports = { data };
