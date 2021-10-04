const chalk = require('chalk');
console.log(chalk.magenta('----------------啟動區-----------------'));
console.log(chalk.red('開始啟動 ') + '機器人已開始註冊指令並啟動');

require('./command')();
require('./bot')();
