const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('機器人會告訴您關於使用者的資訊');

module.exports = { data };
