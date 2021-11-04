const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('kick')
	.setDescription('踢出指定的用戶 ( 僅伺服器管理員可使用 )')
	.addUserOption(option => 
    	option.setName('target')
    		.setDescription('Select a user')
			.setRequired(true));

module.exports.data = data