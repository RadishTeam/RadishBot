const chalk = require('chalk');

try {
    // Config
    this.config = require('./config.js');
} catch (e) {
    console.log(e);
}

// const fs = require('fs')
/*
console.log = (...args) => {
  fs.appendFileSync("log.txt", args.join(" \n"))
  process.stdout.write(args.join(" ") + "\n")
}
*/

console.log(chalk.magenta('----------------啟動訊息區-----------------'));

if (this.config.CI === true) console.log(chalk.red('CI測試事件 ') + 'CI正在進行測試');
console.log(chalk.red('開始啟動 ') + '機器人已開始啟動');

if (!this.config.token) throw new TypeError('沒有找到 token! 請在 config.js 中輸入您的token!');

if (this.config.slashcmdreg) {
    require('./sub_command')(this.config);
}

// True when you want to run the bot
const botRun = true;

if (botRun) {
    require('./bot')(this.config);
}
