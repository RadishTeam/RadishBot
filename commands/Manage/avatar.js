const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('avatar')
	.setDescription('查看指定使用者頭像')
	.addUserOption(option => 
    	option.setName('user')
    		.setDescription('要查看頭像的用戶')
			.setRequired(true));

module.exports.data = data
