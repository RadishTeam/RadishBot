const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("linksafe")
  .setDescription("偵測網址是否包含在已回報的不安全網址內")
  .addStringOption((option) =>
    option.setName("link").setDescription("要偵測的網址").setRequired(true)
  );

module.exports = { data };
