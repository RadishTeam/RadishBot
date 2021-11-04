const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('calories')
	.setDescription('計算你每日需要攝取多少熱量')
	.addStringOption(option =>
		option.setName('gender')
			.setDescription('性別')
			.setRequired(true)
			.addChoice('男性', 'male')
			.addChoice('女性', 'female'))
	.addNumberOption(option => 
    	option.setName('weight')
    		.setDescription('體重')
			.setRequired(true))
	.addNumberOption(option => 
    	option.setName('height')
    		.setDescription('身高')
			.setRequired(true))
	.addNumberOption(option => 
    	option.setName('age')
    		.setDescription('年齡')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('activity')
			.setDescription('活動量')
			.setRequired(true)
			.addChoice('臥床', 'never')
			.addChoice('多坐', 'occasionally')
            .addChoice('一般', 'normal')
            .addChoice('重量', 'always'));

module.exports.data = data