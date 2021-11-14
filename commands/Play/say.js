const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('say')
	.setDescription('要求機器人說出指定內容')
	.addStringOption(option =>
		option.setName('content')
			.setDescription('要機器人說的話')
			.setRequired(true));

module.exports.data = data
