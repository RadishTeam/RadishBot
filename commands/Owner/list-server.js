const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder() 
	.setName('list-server')
	.setDescription('僅機器人擁有者可用的指令 (在控制台列出所在伺服器)')

module.exports.data = data