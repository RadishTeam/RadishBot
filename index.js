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
const cmdRun = false
const botRun = true

if (cmdRun) {
    require('./sub_command')();
}
if (botRun) {
    require('./bot')();
}
