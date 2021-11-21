const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('eatwhat')
    .setDescription('讓機器人提供意見：要吃什麼')
    .addNumberOption(option => option
        .setName('money')
        .setDescription('你擁有的預算')
        .setRequired(true));

module.exports = { data };