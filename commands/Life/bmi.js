const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('bmi')
    .setDescription('計算你的BMI身體質量指數')
    .addNumberOption(option => option
        .setName('weight')
        .setDescription('體重')
        .setRequired(true))
    .addNumberOption(option => option
        .setName('height')
        .setDescription('身高')
        .setRequired(true));

module.exports = { data };