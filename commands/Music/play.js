const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('play')
    .setDescription('讓機器人撥放指定音樂')
    .addStringOption((option) =>
        option
            .setName('url')
            .setDescription('要讓機器人撥放的音樂')
            .setRequired(true),
    );

module.exports = { data };
