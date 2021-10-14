const { Client, Intents } = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const chalk = require('chalk');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require('./config.json');

const startbot = () => {
    const logincommand = require('./command');
    function fisherYatesShuffle(arr){
    	for(var i =arr.length-1 ; i>0 ;i--){
        	var j = Math.floor( Math.random() * (i + 1) ); //random index
        	[arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    	}
	}
    let reply = ["不知道","我覺得可以喔","你做不到","先不要。","你一定可以的","你確定？","仔細思考，你自己一定知道答案","加油，努力就會成功","笑死欸，一定會失敗的","好喔","再問一次吧！","不告訴你","一定會成功！"]
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
    	.addFields(
			{ name: '/conch', value: '心中想著一個問題，並使用此指令，機器人會告訴你答案' }
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
			{ name: '目前的版本', value: 'Version 3.0' }
        	)
		.addFields(
			{ name: '最後更新日期', value: '2021 | 10 | 08' }
        	)
		.setFooter('RadishBot', 'https://cdn.discordapp.com/avatars/891195320690700299/eb3b64428add03208340cf3f1866561a.png?size=80');
	//當登入成功時發送訊息
	client.on('ready', () => {

        //終端紀錄
  		console.log(chalk.blue('啟動通知 ') + `${client.user.tag} 已成功登入並上線！`);

        //官方狀態頻道
        const channel = client.channels.cache.get('891301978678902834');
        //console 頻道發送
		channel.send('<@&891303808615981116> \n 目前機器人正常運作，指令皆可使用。');
        //調時差
  		let Today = new Date();
        let day = Today.getDate()
        let hours = Today.getUTCHours()+8
        	if (hours >= 24){
				hours = hours - 24
                day = day + 1
        	} else {
            	hours = hours
        	}
        //終端紀錄
        console.log(chalk.blue('啟動通知 ') + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + day + " 日 " + hours + " 時 " +	Today.getMinutes() + " 分 " + Today.getSeconds() + " 秒");
		const conchannel = client.channels.cache.get('896057058854588426');
        conchannel.send("```"+Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + day + " 日 " + hours + " 時 " +	Today.getMinutes() + " 分 " + Today.getSeconds() + " 秒"+" 機器人啟動成功```")
        //終端紀錄
  		console.log(chalk.blue('啟動通知 ') + `${client.guilds.cache.size} 個伺服器`)

        //設定狀態
  		client.user.setPresence({ activities: [{ name: `/help • 在${client.guilds.cache.size}個伺服器` }], status: 'connecting' });
        //client.user.setPresence({ activities: [{ name: `機器人更新中` }], status: 'dnd' });
        //所在伺服器列出
        client.guilds.cache.forEach(guild => {
            //終端紀錄
  			console.log(chalk.yellow('所在伺服 ') + `${guild.name} | ${guild.id}`);
		})
        //終端紀錄
        console.log(chalk.cyan('----------------過程變動區----------------'))
        
	});
	//新增
    client.on("guildCreate", async guild => {
        console.log(chalk.green('進退變動 ') +`加入${guild.name}`)
        //console 頻道
        const invitechannel = client.channels.cache.get('896381065546063963');
        //進退變動 加入
        invitechannel.send("```" + `機器人已加入：${guild.name}` + "```")
  		if (!guild.systemChannel) return;
  		guild.systemChannel.send({ embeds: [sayinvite] });
	})
    //刪除
    client.on("guildDelete", guild => {
  		console.log(chalk.green('進退變動 ') +`離開${guild.name}`);
        //console 頻道
        const invitechannel = client.channels.cache.get('896381065546063963');
        //進退變動 離開
        invitechannel.send("```" + `機器人已離開：${guild.name}` + "```")
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
    	await interaction.reply(`伺服器名稱：${interaction.guild.name}\n伺服器人數：${interaction.guild.memberCount}`);
  	}
  	if (interaction.commandName === 'userinfo') {
    	await interaction.reply(`使用者名稱： ${interaction.user.tag}\n使用者ID： ${interaction.user.id}`);
  	}
  	if (interaction.commandName === 'botinfo') {
    	await interaction.reply({ embeds: [sayinfo] });
  	}
    if (interaction.commandName === 'conch') {
        fisherYatesShuffle(reply);
        await interaction.reply(reply[1]);
    }
    })
    
	//token登入
	client.login(token);

}
module.exports = startbot;
