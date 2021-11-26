const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('prime')
    .setDescription('判斷數字是否為質數')
    .addIntegerOption(option => option
        .setName('number')
        .setDescription('數字')
        .setRequired(true));

module.exports = { data };