const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('report')
    .setDescription('向機器人開發者回報問題')
    .addStringOption(option => option
        .setName('content')
        .setDescription('要回報的內容')
        .setRequired(true));

module.exports = { data };