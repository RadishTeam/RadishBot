const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const chalk = require('chalk');

const commands = [
{
    name: 'help', 
    description: '呼叫指令列表'
},
{
    name: 'botping', 
    description: '機器人的延遲'
},
{
    name: 'ping', 
    description: '回覆您pong！'
},
{
    name: 'serverinfo', 
    description: '關於伺服器的資訊'
},
{
    name: 'userinfo', 
    description: '關於用戶的資訊'
},
{
    name: 'botinfo', 
    description: '關於機器人的資訊'
},
{
    name: 'say', 
    description: '讓機器人說出要求的話',
},]; 


const rest = new REST({ version: '9' }).setToken('token');

(async () => {
  try {
    console.log(chalk.green('指令註冊 ') + '正在註冊機器人的斜線 (/) 指令');

    await rest.put(
      Routes.applicationCommands(''),
      { body: commands },
    );

    console.log(chalk.green('指令註冊 ') + '成功註冊機器人的斜線 (/) 指令');
  } catch (error) {
    console.error(error);
  }
})();
