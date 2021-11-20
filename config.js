module.exports = {
  owner: ['在此輸入或使用.env'], // 可以使用擁有者指令的用戶ID
  botName: process.env.botName || '在此輸入或使用.env', // 機器人名稱
  prefix: process.env.prefix || '在此輸入或使用.env', // 機器人前綴
  token: process.env.token || '在此輸入或使用.env', // 啟動時會使用這個金鑰登入 (也就是機器人token)
  clientID: process.env.clientID || '在此輸入或使用.env', // 機器人註冊斜綫指令 (/) 會使用這個機器人ID (填入機器人ID 或者Developer Portal的Application ID)
  consoleChannel: process.env.consoleChannel || '在此輸入或使用.env', // 機器人啟動會記錄在這個頻道 (填入ID)
  recServer: process.env.recServer || '在此輸入或使用.env', // 該伺服器的變動被記錄 (填入ID)
  serverRecChannel: process.env.serverRecChannel || '在此輸入或使用.env', // 審核日誌伺服的變動會記錄在這個頻道 (填入ID)
  inviteChannel: process.env.inviteChannel || '', // 機器人的進出伺服器會記錄在這個頻道 (填入ID)
  commandRecChannel: process.env.commandRecChannel || '在此輸入或使用.env', // 機器人指令的使用紀錄會記錄在這個頻道 (填入ID)
  reportChannel: process.env.reportChannel || '在此輸入或使用.env', // 若有錯誤的回報會記錄在這個頻道 (填入ID)
  slashcmdreg: process.env.slashcmdreg || '在此輸入或使用.env', //第一次啓動請用true, 否則請用false  如果為tru則會注冊斜綫指令 (/)
};
