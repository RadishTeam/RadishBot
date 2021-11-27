const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('together-words-snack')
    .setDescription('和朋友一起在語音頻道玩Words Snack遊戲');

module.exports = { data };
