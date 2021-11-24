const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("vote")
  .setDescription("提出一個問題或想法讓大家進行投票")
  .addStringOption((option) =>
    option.setName("content").setDescription("要投票的內容").setRequired(true)
  );

module.exports = { data };
