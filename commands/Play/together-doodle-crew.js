const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('together-doodle-crew')
	.setDescription('和朋友一起在語音頻道玩Doodle Crew遊戲');

module.exports.data = data
