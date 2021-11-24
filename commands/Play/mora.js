const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('mora')
    .setDescription('和機器人玩剪刀石頭布遊戲')
    .addStringOption(option => option
        .setName('choose')
        .setDescription('你要出什麼')
        .setRequired(true)
        .addChoice('剪刀', 'sci')
        .addChoice('石頭', 'sto')
        .addChoice('布', 'pap'));

module.exports = { data };
