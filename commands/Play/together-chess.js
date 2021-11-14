const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('together-chess')
	.setDescription('和朋友一起在語音頻道玩西洋棋遊戲');

module.exports.data = data
