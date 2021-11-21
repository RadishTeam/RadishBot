const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('botping')
    .setDescription('機器人會告訴您他的延遲');

module.exports = { data };