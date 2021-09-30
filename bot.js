const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const chalk = require('chalk');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
//help嵌入設定
const exampleEmbed = new MessageEmbed()
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
//botinfo嵌入設定
const exampleEmbed1 = new MessageEmbed()
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
		{ name: '目前的版本', value: 'Version 2.0' }
        )
	.addFields(
		{ name: '最後更新日期', value: '2021 | 09 | 29' }
        )
	.setFooter('RadishBot', 'https://cdn.discordapp.com/avatars/891195320690700299/eb3b64428add03208340cf3f1866561a.png?size=80');
//當登入成功時發送訊息
client.on('ready', () => {
  console.log(chalk.blue('啟動通知 ') + `${client.user.tag} 已成功登入並上線！`);
  let Today = new Date();
  console.log(chalk.blue('啟動通知 ') + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日 " + (Today.getUTCHours()+8) + " 時 " + 	Today.getMinutes() + " 分 " + Today.getSeconds() + " 秒");
  console.log(chalk.blue('啟動通知 ') + `${client.guilds.cache.size} 個伺服器`)
  client.user.setPresence({ activities: [{ name: `/help • 在${client.guilds.cache.size}個伺服器` }], status: 'connecting' });
});
//help
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'help') {
    await interaction.reply({ embeds: [exampleEmbed] });
  }
});
//botping
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'botping') {
    interaction.reply(`機器人的延遲： ${client.ws.ping}ms`);
  }
});
//ping
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
//serverinfo
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'serverinfo') {
    await interaction.reply(`伺服器名稱： ${interaction.guild.name}\n伺服器人數： ${interaction.guild.memberCount}`);
  }
});
//userinfo
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'userinfo') {
    await interaction.reply(`使用者名稱： ${interaction.user.tag}\n使用者ID： ${interaction.user.id}`);
  }
});
//botinfo
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'botinfo') {
    await interaction.reply({ embeds: [exampleEmbed1] });
  }
});
//token登入
client.login('token');
