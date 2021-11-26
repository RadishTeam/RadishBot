const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('embed-secret')
    .setDescription('要求機器人傳送指定嵌入內容並不顯示指令使用者')
    .addStringOption(option => option
        .setName('title')
        .setDescription('嵌入標題')
        .setRequired(true))
    .addStringOption(option => option
        .setName('content')
        .setDescription('嵌入內容')
        .setRequired(true));

module.exports = { data };
