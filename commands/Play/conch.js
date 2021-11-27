const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('conch')
    .setDescription('心中想著一個問題，並使用此指令，機器人會告訴你答案')
    .addStringOption(option => option
        .setName('question')
        .setDescription('要詢問神奇海螺的問題')
        .setRequired(true));

module.exports = { data };