const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("embed")
  .setDescription("要求機器人傳送指定嵌入內容")
  .addStringOption((option) =>
    option.setName("title").setDescription("嵌入標題").setRequired(true)
  )
  .addStringOption((option) =>
    option.setName("content").setDescription("嵌入內容").setRequired(true)
  );

module.exports = { data };
