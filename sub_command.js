const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const chalk = require('chalk');
const fs = require('fs');
const logincommand = ({ clientID, token }) => {

    const commands = [];
    const cmdDirs = fs.readdirSync('./commands');
    for (const dir of cmdDirs) {
        const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${dir}/${file}`);
            commands.push(command.data.toJSON());
        }
    }

    const rest = new REST({ version: '9' }).setToken(token);

    (async () => {
        try {
            console.log(chalk.red('斜線指令') + ' 開始註冊機器人互動應用程式指令 (/) Slash command');
            console.log(chalk.red('斜線指令') + ' 正在新增斜線指令檔案');
            await rest.put(
                Routes.applicationCommands(clientID),
                { body: commands },
            );
            console.log(chalk.red('斜線指令') + ' 成功註冊機器人互動應用程式指令 (/) Slash command');
        } catch (error) {
            if (error.message.includes('Invalid Form Body')) return console.log(chalk.red('錯誤：已經註冊過互動應用程式指令了 (/)，請將 config.js 中的 slashcmdreg 選項改為 false'));
        }
    })();
};
module.exports = logincommand;
