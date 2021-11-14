const chalk = require('chalk');
const fs = require('fs')
/*
console.log = (...args) => {
  fs.appendFileSync("log.txt", args.join(" \n"))
  process.stdout.write(args.join(" ") + "\n")
}
*/
console.log(chalk.magenta('----------------啟動訊息區-----------------'));
console.log(chalk.red('開始啟動 ') + '機器人已開始啟動');
const botRun = true

if (botRun) {
    require('./bot')();
}
