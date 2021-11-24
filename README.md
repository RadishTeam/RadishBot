# RadishBot

此專案是 Discord 中 RadishBot 機器人的原始碼，使用 Discord.js v13 製作
使用時請遵照 GNU GPL 開源協議

## 🔮 使用說明

1. 使用前請先下載所有檔案，並在終端機輸入以下指令：

```
npm install
```

2. 接著將 config.js 中的各個數據替換為自己機器人的或者使用.env
   ( token 以及 client-ID 可以從 https://discord.com/developers/applications 找到 )

3. 運行 index.js 讓機器人註冊指令並開始運行，此時機器人會上線。

## 📌 製作日誌

2021 09 30 | Update By Winson\_章魚#9418

2021 10 04 | Update By Winson\_章魚#9418

2021 11 04 | Update By Winson\_章魚#9418

2021 11 07 | Update By Winson\_章魚#9418

2021 11 08 | Update By Winson\_章魚#9418

2021 11 14 | Update By Winson\_章魚#9418

## 🍴 貢獻

貢獻前請注意：

1. 拉取檔案後，如果沒有安裝 `npm-check-updates` 或 `eslint` 套件，請在終端機執行：

```
npm run env
```

2. 在終端機執行下列指令：

```
npm run check
```

如果 ESLint 報出錯誤，則依 ESLint 的提示修改。修改完後執行：

```
npm run el
```

重複此步驟直到 ESLint 沒有報錯為止。

3. 恭喜！你可以到[PR 頁面](https://github.com/WinsonOTP/RadishBot/pulls)開啟一個 Pull Request。
