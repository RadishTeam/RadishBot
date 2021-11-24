const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('機器人會告訴您關於伺服器的資訊');

module.exports = { data };
