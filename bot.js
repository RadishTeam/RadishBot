const { Client, Intents } = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const chalk = require('chalk');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const startbot = () => {
    //嵌入
    const sayinvite = new MessageEmbed()
		.setColor('#FF5151')
		.setTitle('RadishBot')
		.setURL('https://reurl.cc/95pXqj')
		.setDescription('感謝您邀請RadishBot到您的伺服器')
    	.addFields(
			{ name: '使用 (/) 呼叫斜線指令', value: '或使用 /help 獲取機器人的指令列表' }
        	)
    	.setFooter('RadishBot', 'https://cdn.discordapp.com/avatars/891195320690700299/eb3b64428add03208340cf3f1866561a.png?size=80');
    const sayhelp = new MessageEmbed()
		.setColor('#FF5151')
		.setTitle('RadishBot - 指令列表')
		.setURL('')
		.setDescription('機器人的指令列表')
		.addFields(
			{ name: '/help', value: '機器人會傳送指令列表' }
        	)
		.addFields(
			{ name: '/ping', value: '機器人會回覆您Pong' }
        	)
		.addFields(
			{ name: '/botping', value: '機器人會告訴您他的延遲' }
        	)
		.addFields(
			{ name: '/serverinfo', value: '機器人會告訴您關於伺服器的資訊' }
        	)
		.addFields(
			{ name: '/userinfo', value: '機器人會告訴您關於使用者的資訊' }
        	)
		.addFields(
			{ name: '/botinfo', value: '機器人會告訴您關於機器人的資訊' }
        	)
		.setFooter('RadishBot', 'https://cdn.discordapp.com/avatars/891195320690700299/eb3b64428add03208340cf3f1866561a.png?size=80');
	const sayinfo = new MessageEmbed()
		.setColor('#FF5151')
		.setTitle('RadishBot - 機器人資訊')
		.setURL('')
		.setDescription('機器人的相關資訊')
		.addFields(
			{ name: '邀請機器人', value: 'https://reurl.cc/73eAWb' }
        	)
		.addFields(
			{ name: '官方伺服器', value: 'https://discord.gg/S2jAYeXUGn' }
        	)
		.addFields(
			{ name: '官方的網站', value: 'https://reurl.cc/95pXqj' }
        	)
		.addFields(
			{ name: '目前的版本', value: 'Version 2.2' }
        	)
		.addFields(
			{ name: '最後更新日期', value: '2021 | 10 | 02' }
        	)
		.setFooter('RadishBot', 'https://cdn.discordapp.com/avatars/891195320690700299/eb3b64428add03208340cf3f1866561a.png?size=80');
	//當登入成功時發送訊息
	client.on('ready', () => {
  		console.log(chalk.blue('啟動通知 ') + `${client.user.tag} 已成功登入並上線！`);
  		let Today = new Date();
  		console.log(chalk.blue('啟動通知 ') + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日 " + (Today.getUTCHours()+8) + " 時 " + 	Today.getMinutes() + " 分 " + Today.getSeconds() + " 秒");
  		console.log(chalk.blue('啟動通知 ') + `${client.guilds.cache.size} 個伺服器`)
  		client.user.setPresence({ activities: [{ name: `/help • 在${client.guilds.cache.size}個伺服器` }], status: 'connecting' });
        client.guilds.cache.forEach(guild => {
  			console.log(chalk.yellow('所在伺服 ') + `${guild.name} | ${guild.id}`);
		})
        console.log(chalk.cyan('----------------大事記----------------'))
	});
	//新增
    client.on("guildCreate", async guild => {
        console.log(chalk.green('進退變動 ') +`加入${guild.name}`)
  		if (!guild.systemChannel) return;
  		guild.systemChannel.send({ embeds: [sayinvite] });
	})
    //刪除
    client.on("guildDelete", guild => {
  		console.log(chalk.green('進退變動 ') +`離開${guild.name}`);
    })
	//指令
	client.on('interactionCreate', async interaction => {
  	if (!interaction.isCommand()) return;

  	if (interaction.commandName === 'help') {
    	await interaction.reply({ embeds: [sayhelp] });
  	}
  	if (interaction.commandName === 'botping') {
    	interaction.reply(`機器人的延遲： ${client.ws.ping}ms`);
  	}
  	if (interaction.commandName === 'ping') {
    	await interaction.reply('Pong!');
  	}
  	if (interaction.commandName === 'serverinfo') {
    	await interaction.reply(`伺服器名稱： ${interaction.guild.name}\n伺服器人數： ${interaction.guild.memberCount}`);
  	}
  	if (interaction.commandName === 'userinfo') {
    	await interaction.reply(`使用者名稱： ${interaction.user.tag}\n使用者ID： ${interaction.user.id}`);
  	}
  	if (interaction.commandName === 'botinfo') {
    	await interaction.reply({ embeds: [sayinfo] });
  	}
    })
	//token登入
	client.login('token');

}
module.exports = startbot;
