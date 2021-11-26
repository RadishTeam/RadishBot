const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('機器人會告訴您關於機器人的資訊');

module.exports = { data };