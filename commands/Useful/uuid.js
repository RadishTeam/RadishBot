const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('uuid')
    .setDescription('隨機產生十組uuid辨識碼');

module.exports = { data };
