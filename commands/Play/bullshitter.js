const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('bullshitter')
    .setDescription('產生一段唬爛的文字')
    .addStringOption((option) =>
        option.setName('topic').setDescription('主題').setRequired(true),
    );

module.exports = { data };
