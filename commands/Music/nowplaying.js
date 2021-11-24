const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('nowplaying')
    .setDescription('讓機器人告訴您目前撥放音樂');

module.exports = { data };
