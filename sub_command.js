const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const chalk = require('chalk');
const fs = require('fs');
const logincommand = () => {
    const commands = [];    
    const cmdDirs = fs.readdirSync('./commands');
	for (const dir of cmdDirs) {
        const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${dir}/${file}`);
            commands.push(command.data.toJSON());
        }
    }

    const rest = new REST({ version: '9' }).setToken("TOKEN");

    (async () => {
        try {
            console.log(chalk.red("斜線指令") + ' 開始註冊機器人互動應用程式指令 (/) Slash command');
			console.log(chalk.red("斜線指令") + ' 正在新增斜線指令檔案');
            await rest.put(
                Routes.applicationCommands("CLIENT ID"),                
                { body: commands },
            );
			console.log(chalk.red("斜線指令") + ' 成功註冊機器人互動應用程式指令 (/) Slash command');
        } catch (error) {
            console.error(error);
        }
    })();
}
module.exports = logincommand;