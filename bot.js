const {
    // Collection,
    Client,
    // Formatters,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
    MessageSelectMenu,
} = require('discord.js');
const {
    DiscordTogether,
} = require('discord-together');
const {
    createMusicManager,
    YoutubeUtils,
} = require('@kyometori/djsmusic');
const chalk = require('chalk');
const fs = require('fs-extra');
const translate = require('translate-google');
const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'],
});
// const currency = new Collection();
/* ----------------------------------------------------------------------------------------------- */
const startbot = (config) => {
    const blockedUsers = ['ud1', 'id2'];

    function timeResolve(second) {
        if (second < 60) return `0:${toTwoDigits(second)}`;
        else return `${~~(second / 60)}:${toTwoDigits(second % 60)}`;
    }
    const twoDigits = num => num < 10 ? `0${num}` : `${num}`;

    function toTwoDigits(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }

    function isPrime(num) {
        const t = parseInt(Math.sqrt(num));
        for (let i = 2; i <= t; i++) {
            if (num % i == 0 && !num <= 1) {
                return false;
            }
        }
        return true;
    }

    function getRandom(x) {
        return Math.floor(Math.random() * x) + 1;
    }


    function _uuid() {
        let d = Date.now();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    // 回覆或偵測用文字
    const bullshitter = ['世界上的所有人都需要<name>，因為他們的生活中無時無刻都有著<name>的存在，要是沒有<name>，世界可能會就此滅絕。<name>第一次被人類發現是在今年一月一日，並取名為<name>，並把當日訂為一個重要的日子。為了讓大家不會缺乏<name>，聯合國特別訂定了<name>使用限制法。', '每當我使用<name>時，我總會感到神奇，因為我很好奇為什麼<name>會那麼好用，讓我無時無刻都想使用他。我尚未開始使用<name>時，我的生活非常不方便；自從我開始使用<name>後，再也沒有煩惱產生了，你一定要用用看<name>！', '<name>是一個複雜的議題，幾乎沒有人可以使用隻字片語解釋他。<name>的深奧有如微積分一般複雜，目前世界上至今無人解釋出<name>的內涵意義。', '<name>，一個目前尚未得知原因的疾病，目前有許多科學家正在研究<name>，因為鉛洗年曾經公布研究<name>成功的人可得到三千萬獎金。但目前依舊沒有科學家成功得到<name>的答案。全世界已有數千萬人得到<name>疾病，若不根除，必定讓人類滅亡。', '為什麼我們需要<name>呢？這牽涉到了數百年前金屬器時代的一個問題，當時台灣尚未開始發展，但因為<name>的出現，解決了人們日常生活中的各種問題。<name>可以從許多管道取得，像是百貨公司、學校等生活處所，且不用任何成本即可使用。', '有一天，我和家人出遊，途中看到了一些<name>，於是我很好奇，為什麼<name>會存在於世界上呢？經過我查詢資料後發現，<name>會出現在世界中是因為我們的製造，人類經過不斷的研發，才研究出了<name>，讓大家的生活更加便利。'];
    const reply = ['不知道', '我覺得可以喔', '你做不到', '先不要。', '你一定可以的', '你確定？', '仔細思考，你自己一定知道答案', '加油，努力就會成功', '笑死欸，一定會失敗的', '好喔。', '再問一次吧！', '不告訴你', '一定會成功！', '我相信你！', '你的問題我不想回答', '是喔。', '所以呢？', '我不要', '我不愛你', '你是想被我MUTE喔', '不想理會', '我覺得你可以放棄', '你或許可以在這裡找到答案', '我是海螺，住在海裡，你的問題，我只能沉默。', '我是機器人，我選擇...不要選擇', '我沒權限告訴你答案，因為你說得太抽象了', '小孩子才問這問題', '這問題神奇到我無法回答', '有事請 https://google.com ，不要找我', '此指令交互失敗，騙你的', '只要你爽就好', '我期待你的表現唷！', '我再看看', '我的運作時間為24h，除了週一到週日以外。\n現在為下班時間，請下次再來。', '哈哈哈，我就不告訴你，就是玩', '努力不懈，成功即至', '不要啦，齁唷', '加油，我愛你', '應該會', '不一定', '可能吧', '一定會'];
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    const nosafe = ['https://discordgift.site/Q4YFjxxdkms2kzIo', 'discocrd.com', 'discord-egift.com', 'https://discords-premium.com/', 'https://dlscord.org/nitro-gift', 'http://discordc.gift/Yexjh7BuKC', 'https://minecraftspring04.weebly.com/java7', 'ɢoogle.com'];
    const eatcheap = ['蝦仁炒飯', '油飯', '滷肉飯', '雞腿便當', '排骨便當', '漢堡', '生菜沙拉', '滷味', '麵線', '炒麵', '鹹酥雞', '水餃', '甜不辣', '燙青菜', '臭豆腐'];
    const eatnomal = ['白醬義大利麵', '番茄義大利麵', '小披薩', '炸雞', '拉麵', '馬鈴薯燉肉', '番茄炒蛋', '蔥爆牛肉', '宮保雞丁', '宮保花枝', '白帶魚'];
    const eatexpen = ['昆布日式火鍋', '鮭魚', '壽司', '紅棗枸杞養生鍋', '鰻魚飯', '紅燒鰻魚', '炸鰻魚', '海鮮火鍋', '烤鴨'];
    const eatsoexp = ['龍蝦', '帝王蟹', '烏魚子'];
    const pss = ['sci', 'sto', 'pap'];
    const prefix = '//';

    // 嵌入

    const sayinvite = new MessageEmbed()
        .setColor(0xE4FFF6)
        .setTitle(`${config.botName}`)
        .setDescription(`感謝您邀請${config.botName}到您的伺服器`)
        .addFields({
            name: '使用 (/) 呼叫斜線指令',
            value: '或使用 /help 獲取機器人的指令列表',
        })
        .setFooter(`${config.botName}`, 'https://cdn.discordapp.com/avatars/891195320690700299/7e70c4d7db63c7466488c8e9c6319307.png?size=80');

    const sayblock = new MessageEmbed()
        .setColor(0xE4FFF6)
        .setTitle('封鎖通知')
        .setDescription('機器人拒絕您使用指令，因為您在官方的封鎖名單內')
        .setFooter(`${config.botName}`, 'https://cdn.discordapp.com/avatars/891195320690700299/7e70c4d7db63c7466488c8e9c6319307.png?size=80');

    const sayinfo = new MessageEmbed()
        .setColor(0xE4FFF6)
        .setTitle(`${config.botName} - 機器人資訊`)
        .setDescription('機器人的相關資訊')
        .addFields({
            name: '邀請機器人',
            value: 'https://reurl.cc/73eAWb',
        })
        .addFields({
            name: '官方伺服器',
            value: 'https://discord.gg/S2jAYeXUGn',
        })
        .addFields({
            name: '目前的版本',
            value: 'Version 7.1.0',
        })
        .addFields({
            name: '最後更新日期',
            value: '2021 | 11 | 13',
        });
    // 當登入成功時發送訊息
    client.once('ready', async () => {

        // leave('要離開的伺服器id')

        // 終端紀錄

        client.discordTogether = new DiscordTogether(client);
        createMusicManager(client);

        console.log(chalk.blue('啟動通知 ') + `${client.user.tag} 已成功登入並上線！`);


        // 調時差
        const Today = new Date();
        let day = Today.getDate();
        let hours = Today.getUTCHours() + 8;

        if (hours >= 24) {
            hours = hours - 24;
            day = day + 1;
        }

        // 終端紀錄
        console.log(chalk.blue('啟動通知 ') + Today.getFullYear() + ' 年 ' + (Today.getMonth() + 1) + ' 月 ' + day + ' 日 ' + hours + ' 時 ' + Today.getMinutes() + ' 分 ' + Today.getSeconds() + ' 秒');
        const conchannel = client.channels.cache.get(config.consoleChannel);

        // CI
        const ci = process.env.CI
        function cie() {
            conchannel.send('```' + Today.getFullYear() + ' 年 ' + (Today.getMonth() + 1) + ' 月 ' + day + ' 日 ' + hours + ' 時 ' + Today.getMinutes() + ' 分 ' + Today.getSeconds() + ' 秒' + ' CI測試```');
            process.exit()
        }
        if (ci === 'true') return cie();

        conchannel.send('```' + Today.getFullYear() + ' 年 ' + (Today.getMonth() + 1) + ' 月 ' + day + ' 日 ' + hours + ' 時 ' + Today.getMinutes() + ' 分 ' + Today.getSeconds() + ' 秒' + ' 機器人啟動成功```');
        // 終端紀錄
        console.log(chalk.blue('啟動通知 ') + `${client.guilds.cache.size} 個伺服器`);

        // 設定狀態

        const all = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

        client.user.setPresence({
            activities: [{
                name: `/help • ${client.guilds.cache.size}個伺服器 | ${all}個使用者`,
            }],
            status: 'connecting',
        });
        // client.user.setPresence({ activities: [{ name: `機器人更新中` }], status: 'dnd' });
        // 終端紀錄
        console.log(chalk.cyan('----------------過程變動區----------------'));

    });
    client.on('messageCreate', async message => {
        if (message.guildId != config.recServer) return;
        if (message.content == prefix + 'test') {
            message.reply('機器人訊息回覆成功運行');

        }
    });
    client.on('messageDelete', message => {
        if (message.guildId != config.recServer) return;
        const sayre = new MessageEmbed()
            .setColor(0xE4FFF6)
            .setTitle('審核日誌')
            .setDescription(`一則由 ${message.author.tag} 發送的訊息遭到刪除\n內容：${message.content}`)
            .setFooter(`${config.botName}`, 'https://cdn.discordapp.com/avatars/891195320690700299/7e70c4d7db63c7466488c8e9c6319307.png?size=80');
        const rechannel = client.channels.cache.get(config.serverRecChannel);
        rechannel.send({
            embeds: [sayre],
        });
    });
    // 新增
    client.on('guildCreate', async guild => {
        console.log(chalk.green('進退變動 ') + `加入${guild.name}`);
        client.user.setPresence({
            activities: [{
                name: `/help • ${client.guilds.cache.size}個伺服器 | ${client.users.cache.size}個使用者`,
            }],
            status: 'connecting',
        });

        // console 頻道
        const invitechannel = client.channels.cache.get(config.inviteChannel);
        // 進退變動 加入
        invitechannel.send('```' + `機器人已加入：${guild.name}` + '```');

        if (!guild.systemChannel) return;
        guild.systemChannel.send({
            embeds: [sayinvite],
        });
    });
    // 刪除
    client.on('guildDelete', async guild => {
        console.log(chalk.green('進退變動 ') + `離開${guild.name}`);
        client.user.setPresence({
            activities: [{
                name: `/help • ${client.guilds.cache.size}個伺服器 | ${client.users.cache.size}個使用者`,
            }],
            status: 'connecting',
        });

        // console 頻道
        const invitechannel = client.channels.cache.get(config.inviteChannel);
        // 進退變動 離開
        invitechannel.send('```' + `機器人已離開：${guild.name}` + '```');
    });
    // 指令

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (!interaction.inGuild()) return interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setColor(0xE4FFF6)
                    .setTitle('無法使用')
                    .setDescription('自2021/11/06開始，機器人指令僅限伺服器內使用')
                    .setFooter('RadishBot', 'https://cdn.discordapp.com/avatars/891195320690700299/7e70c4d7db63c7466488c8e9c6319307.png?size=80'),
            ],
        });
        if (blockedUsers.includes(interaction.user.id)) return interaction.reply({
            embeds: [sayblock],
        });

        const commandChannel = client.channels.cache.get(config.commandRecChannel);
        commandChannel.send('```' + `【${interaction.guild.name}】：[${interaction.user.tag}]使用了( /${interaction.commandName} )指令` + '```');

        if (interaction.commandName === 'botping') {
            await interaction.reply(`🏠╎Websocket Latency: ${client.ws.ping}ms\n🤖╎Bot Latency: ${Date.now() - interaction.createdTimestamp}ms`);
        }
        if (interaction.commandName === 'serverinfo') {
            const serverinfo = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle(`${interaction.guild.name}`)
                .setThumbnail(`${interaction.guild.iconURL()}`)
                .setDescription(' ')
                .addFields({
                    name: '名稱',
                    value: `${interaction.guild.name}`,
                    inline: true,
                })
                .addFields({
                    name: '人數',
                    value: `${interaction.guild.memberCount}`,
                    inline: true,
                })
                .addFields({
                    name: '創建時間',
                    value: `${interaction.guild.createdAt}`,
                })
                .addFields({
                    name: '擁有者',
                    value: `<@${interaction.guild.ownerId}>`,
                    inline: true,
                });
            await interaction.reply({
                embeds: [serverinfo],
            });
        }
        if (interaction.commandName === 'userinfo') {
            const userinfo = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle(`${interaction.user.tag}`)
                .setDescription(' ')
                .setThumbnail(`${interaction.user.displayAvatarURL()}`)
                .addFields({
                    name: '使用者名稱',
                    value: `${interaction.user.tag}`,
                    inline: true,
                })
                .addFields({
                    name: '使用者ID',
                    value: `${interaction.user.id}`,
                    inline: true,
                })
                .addFields({
                    name: '使用者創建時間',
                    value: `${interaction.user.createdAt}`,
                })
                .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);

            await interaction.reply({
                embeds: [userinfo],
            });
        }
        if (interaction.commandName === 'botinfo') {
            await interaction.reply({
                embeds: [sayinfo],
            });
        }
        if (interaction.commandName === 'conch') {
            try {
                await interaction.reply(reply[getRandom(reply.length) - 1]);
            } catch (error) {
                interaction.reply('🪀 機器人端發生錯誤，請檢查指令或進行回報');
            }
        }
        if (interaction.commandName === 'number') {
            await interaction.reply(`${number[getRandom(number.length) - 1]}`);
        }
        if (interaction.commandName === 'time') {
            const Today = new Date();
            let day = Today.getDate();
            let hours = Today.getUTCHours() + 8;
            if (hours >= 24) {
                hours = hours - 24;
                day = day + 1;
            }
            await interaction.reply('現在時間：`' + Today.getFullYear() + ' 年 ' + (Today.getMonth() + 1) + ' 月 ' + day + ' 日 ' + hours + ' 時 ' + Today.getMinutes() + ' 分 ' + Today.getSeconds() + ' 秒`');
        }
        if (interaction.commandName === 'say') {
            const content = interaction.options.getString('content');
            await interaction.reply(content);
        }
        if (interaction.commandName === 'linksafe') {
            let safe = 0;
            const link = interaction.options.getString('link');
            for (let i = 0; i <= nosafe.length; i++) {
                if (link.includes(nosafe[i])) {
                    safe = 1;
                }
            }
            if (safe == 1) {
                await interaction.reply('📛 此網址經回報為不安全網址，請謹慎點擊！ 📛');
            } else {
                await interaction.reply('🪐 此網址未經回報，請自行考慮是否點擊 ~ 🪐');
            }

        }
        if (interaction.commandName === 'embed') {
            const title = interaction.options.getString('title');
            const content = interaction.options.getString('content');
            const sayembed = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle(`${title}`)
                .setDescription(`${content}`);
            await interaction.reply({
                embeds: [sayembed],
            });
        }
        if (interaction.commandName === 'embed-secret') {
            const title = interaction.options.getString('title');
            const content = interaction.options.getString('content');
            const sayembed = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle(`${title}`)
                .setDescription(`${content}`);
            interaction.reply({
                content: '已經成功發送指定嵌入訊息',
                ephemeral: true,
            });
            await interaction.channel.send({
                embeds: [sayembed],
            });
        }
        if (interaction.commandName === 'transl-zh') {
            const content = interaction.options.getString('content');
            translate(content, {
                from: 'en',
                to: 'zh-tw',
            }).then(res => {
                const usertrans = new MessageEmbed()
                    .setColor('#FF5151')
                    .setTitle('翻譯結果')
                    .setDescription(`原文：${content}\n翻譯：${res}`)
                    .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);
                interaction.reply({
                    embeds: [usertrans],
                });
            });
        }
        if (interaction.commandName === 'transl-en') {
            const content = interaction.options.getString('content');
            translate(content, {
                from: 'zh-tw',
                to: 'en',
            }).then(res => {
                const usertrans = new MessageEmbed()
                    .setColor('#FF5151')
                    .setTitle('翻譯結果')
                    .setDescription(`原文：${content}\n翻譯：${res}`)
                    .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);
                interaction.reply({
                    embeds: [usertrans],
                });
            });
        }
        if (interaction.commandName === 'report') {
            const content = interaction.options.getString('content');
            const suggestembed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('錯誤回報')
                .setDescription(`錯誤： ${content}`)
                .addField(
                    '回報者',
                    `${interaction.user.tag} • \`${interaction.user.id}\``,
                );
            const reportchannel = client.channels.cache.get(config.reportChannel);
            reportchannel.send({
                embeds: [suggestembed],
            });
            await interaction.reply('❤️ 您的回報已傳送至官方Discord，將盡速處理');
        }
        if (interaction.commandName === 'kick') {
            if (interaction.member.permissions.has('KICK_MEMBERS')) {
                const member = interaction.options.getMember('target');
                try {
                    if (member.permissions.has('KICK_MEMBERS')) {
                        interaction.reply('🛑 您不能踢出一個含有踢出成員權限的成員。');
                    } else {

                        member.kick();
                        interaction.reply('✅ 已從伺服器踢出該用戶！');


                    }
                } catch (error) {
                    interaction.reply('🪀 機器人端發生錯誤，請檢查指令或進行回報');
                }
            } else {
                interaction.reply('💺 您沒有權限從伺服器踢出成員。');
            }
        }
        if (interaction.commandName === 'ban') {
            try {
                if (interaction.member.permissions.has('BAN_MEMBERS')) {
                    const user = interaction.options.getMember('target');
                    if (user.permissions.has('BAN_MEMBERS')) {
                        interaction.reply('🛑 您不能封鎖一個含有封鎖成員權限的成員。');
                    } else {
                        interaction.guild.members.ban(user);
                        interaction.reply('✅ 已從伺服器封鎖該用戶！');
                    }
                } else {
                    interaction.reply('💺 您沒有權限從伺服器封鎖成員。');
                }
            } catch (error) {
                interaction.reply('🪀 機器人端發生錯誤，請檢查指令或進行回報');
            }
        }
        if (interaction.commandName === 'eatwhat') {
            try {
                const money = interaction.options.getNumber('money');
                if (money > 1100) {
                    await interaction.reply('今晚，我想來點：' + eatsoexp[getRandom(eatsoexp.length)]);
                } else if (money > 500) {
                    await interaction.reply('今晚，我想來點：' + eatexpen[getRandom(eatexpen.length)]);
                } else if (money > 200) {
                    await interaction.reply('今晚，我想來點：' + eatnomal[getRandom(eatnomal.length)]);
                } else if (money > 20) {
                    await interaction.reply('今晚，我想來點：' + eatcheap[getRandom(eatcheap.length)]);
                } else {
                    await interaction.reply('你擁有的錢過少，機器人也不知道你能吃什麼了。');
                }
            } catch (error) {
                interaction.reply('🪀 機器人端發生錯誤，請檢查指令或進行回報');
            }
        }
        if (interaction.commandName === 'vote') {
            try {
                const votecontent = interaction.options.getString('content');
                const sayvote = new MessageEmbed()
                    .setColor('#FF5151')
                    .setTitle(`${votecontent}`)
                    .setDescription(`${interaction.user.tag} 創建了投票！\n請點擊反應進行投票`);
                const message = await interaction.reply({
                    embeds: [sayvote],
                    fetchReply: true,
                });
                await message.react('<:o_:888944746851106866>');
                await message.react('<:6764_no:888944730593968159>');
            } catch (error) {
                interaction.reply('🪀 機器人端發生錯誤，請檢查指令或進行回報');
            }
        }
        if (interaction.commandName === 'calories') {
            const gender = interaction.options.getString('gender');
            const weight = interaction.options.getNumber('weight');
            const height = interaction.options.getNumber('height');
            const age = interaction.options.getNumber('age');
            const activity = interaction.options.getString('activity');
            let calories = 0;
            let ree = 0;
            if (gender == 'male') {
                ree = weight * 10 + height * 6.25 - age * 5 + 5;
            } else if (gender == 'female') {
                ree = weight * 10 + height * 6.25 - age * 5 - 161;
            }
            if (activity == 'never') {
                calories = ree * 1.2;
            } else if (activity == 'occasionally') {
                calories = ree * 1.3;
            } else if (activity == 'normal') {
                calories = ree * 1.75;
            } else if (activity == 'always') {
                calories = ree * 2;
            }
            const usercalories = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle('每日所需熱量')
                .setDescription(`${calories} 大卡`)
                .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);
            await interaction.reply({
                embeds: [usercalories],
            });
        }
        if (interaction.commandName === 'uuid') {
            const useruuid = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle('十組隨機uuid辨識碼')
                .setDescription(_uuid() + '\n' + _uuid() + '\n' + _uuid() + '\n' + _uuid() + '\n' + _uuid() + '\n' +
                    _uuid() + '\n' + _uuid() + '\n' + _uuid() + '\n' + _uuid() + '\n' + _uuid() + '\n')
                .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);
            await interaction.reply({
                embeds: [useruuid],
            });
        }
        if (interaction.commandName === 'bmi') {
            const weight = interaction.options.getNumber('weight');
            const height = interaction.options.getNumber('height');
            const bmi = Math.floor(weight / ((height / 100) ** 2));
            const bmiys = bmi >= 18.5 && bmi < 24 ? '正常' : '不正常';

            const userbmi = new MessageEmbed()
                .setColor('#FF5151')
                .setTitle('身體質量指數')
                .setDescription(`${bmi} |  計算方式：體重(kg) / 身高(m)的平方`)
                .addFields({
                    name: '體位狀態',
                    value: `${bmiys}  |  體重正常範圍為 BMI=18.5～24`,
                })
                .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);
            await interaction.reply({
                embeds: [userbmi],
            });
        }
        if (interaction.commandName === 'prime') {
            const innumber = interaction.options.getInteger('number');
            if (innumber <= 0) {
                await interaction.reply('請輸入一個大於零的整數');
            } else if (innumber <= 1) {
                await interaction.reply(innumber + ' 不是質數也不是合數');
            } else if (isPrime(innumber) == true) {
                await interaction.reply(innumber + ' 是一個質數');
            } else {
                await interaction.reply(innumber + ' 不是一個質數');
            }
        }
        if (interaction.commandName === 'join') {
            const {
                channel,
            } = interaction;
            const vc = interaction.member.voice.channel;
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!vc) {
                res.setDescription('請先加入一個語音頻道');
                return interaction.reply({
                    embeds: [res],
                });
            }

            if (interaction.client.music.has(interaction.guild.id)) {
                const manager = interaction.client.music.get(interaction.guild.id);
                if (vc.id === manager.channel.id) {
                    res.setDescription('機器人已在您的語音頻道中');
                    return interaction.reply({
                        embeds: [res],
                    });
                }

                res.setDescription('機器人在伺服器的其他語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            interaction.client.music.join({
                channel: vc,
            }).then(manager => {
                manager.on('end', next => {
                    if (next) {
                        if (next.details.from === 'Youtube') {
                            res.setDescription(`開始播放 [${next.title}](${next.details.data.url})`)
                                .setThumbnail(next.details.data.thumbnailUrl)
                                .setFooter(`由 ${next.player.displayName} 指定的歌曲`, next.player.user.displayAvatarURL());
                        } else {
                            res.setDescription(`開始播放 [${next.title === 'unknown' ? next.audioResource : next.title}](${next.audioResource})`)
                                .setThumbnail('')
                                .setFooter(`由 ${next.player.displayName} 指定的歌曲`, next.player.user.displayAvatarURL());
                        }
                    } else {
                        res.setDescription('隊列中的歌曲已播放完畢')
                            .setThumbnail('')
                            .setFooter('');
                    }
                    channel.send({
                        embeds: [res],
                    });

                });
            });
            res.setDescription(`已成功加入 ${vc.name}`);
            interaction.reply({
                embeds: [res],
            });
        }
        if (interaction.commandName === 'play') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                res.setDescription('機器人不在您的語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            await interaction.deferReply();

            const afterPlay = async ([track, queued]) => {
                if (track.details.from === 'Youtube') await track.details.data.fetch();


                res.setFooter(`由 ${track.player.displayName} 指定的歌曲`, track.player.user.displayAvatarURL());

                if (queued) {
                    if (track.details.from === 'Youtube') {
                        res.setThumbnail(track.details.data.thumbnailUrl)
                            .setDescription(`已將 [${track.title}](${track.details.data.url}) 加入隊列`);
                    } else {
                        res.setDescription(`已將 ${track.audioResource} 加入隊列`);
                    }
                } else if (track.details.from === 'Youtube') {
                    res.setThumbnail(track.details.data.thumbnailUrl)
                        .setDescription(`開始播放 [${track.title}](${track.details.data.url})`);
                } else {
                    res.setDescription(`開始播放 ${track.audioResource}`);
                }

                interaction.editReply({
                    embeds: [res],
                });

            };

            const query = interaction.options.getString('url');
            if (YoutubeUtils.isYoutubeLink(query)) try {
                return afterPlay(await manager.play(query, {
                    player: interaction.member,
                }));
            } catch (_) {
                return interaction.editReply('我無法播放這首歌');
            } else try {
                return afterPlay(await (await YoutubeUtils.searchFirstVideo(query)).play(manager, {
                    player: interaction.member,
                }));
            } catch (_) {
                interaction.editReply('找不到任何東西');
            }

        }
        if (interaction.commandName === 'pause') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                res.setDescription('機器人不在您的語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            if (!manager.isPlaying) {
                res.setDescription('音樂目前已經暫停');
                return interaction.reply({
                    embeds: [res],
                });
            }

            try {
                manager.pause();
                res.setDescription('音樂已暫停播放');
                interaction.reply({
                    embeds: [res],
                });
            } catch (err) {
                if (err.message === 'ALREADY_PAUSED') {
                    res.setDescription('音樂目前已經暫停');
                    return interaction.reply({
                        embeds: [res],
                    });
                }
                throw err;
            }
        }
        if (interaction.commandName === 'resume') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                res.setDescription('機器人不在您的語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            if (!manager.isPlaying) {
                res.setDescription('機器人目前已經在撥放音樂');
                return interaction.reply({
                    embeds: [res],
                });
            }

            try {
                manager.resume();
                res.setDescription(`${interaction.user}，已繼續播放`);
                interaction.reply({
                    embeds: [res],
                });
            } catch (err) {
                if (err.message === 'ALREADY_PLAYING') {
                    res.setDescription('機器人目前已經在撥放音樂');
                    return interaction.reply({
                        embeds: [res],
                    });
                }
                throw err;
            }
        }
        if (interaction.commandName === 'skip') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                res.setDescription('機器人不在您的語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            try {
                manager.skip();
                res.setDescription('成功跳過當前撥放歌曲');
                interaction.reply({
                    embeds: [res],
                });
            } catch (err) {
                if (err.message === 'NO_RESOURCES_PLAYING') {
                    res.setDescription('目前沒有歌曲可以跳過');
                    return interaction.reply({
                        embeds: [res],
                    });
                }
                throw err;
            }
        }
        if (interaction.commandName === 'loop') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {
                res.setDescription('機器人不在您的語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            if (!manager.isPlaying) {
                res.setDescription('目前沒有音樂正在撥放');
                return interaction.reply({
                    embeds: [res],
                });
            }

            await interaction.deferReply();

            manager.setLoop(!manager.nowPlaying.isLooping);

            if (manager.nowPlaying.isLooping) {
                res.setDescription('機器人已開啟重複撥放');
                return interaction.editReply({
                    embeds: [res],
                });
            }

            res.setDescription('機器人已停止重複播放');
            interaction.editReply({
                embeds: [res],
            });
        }
        if (interaction.commandName === 'shuffle') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道中');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                res.setDescription('機器人不在您的語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            if (!manager.queue.length) {
                res.setDescription('隊列中沒有任何歌曲');
                return interaction.reply({
                    embeds: [res],
                });
            }

            await interaction.deferReply();

            manager.queue = manager.queue.sort(() => Math.random() - 0.5);

            res.setDescription('成功將隊列順序打亂');

            interaction.editReply({
                embeds: [res],
            });
        }
        if (interaction.commandName === 'nowplaying') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!manager.isPlaying) {
                res.setDescription('機器人尚未開始撥放任何音樂');
                return interaction.reply({
                    embeds: [res],
                });
            }

            await interaction.deferReply();

            const np = manager.nowPlaying;

            let des = '';

            if (np.details.from === 'Youtube') {
                des = `正在播放：[${np.title}](${np.details.data.url})\n\n` +
                    `播放時間：${timeResolve(~~(np.playedMs / 1000))} / ${timeResolve(+np.details.data.lengthSeconds)}\n\n` +
                    `上傳頻道：[${np.details.data.channel.name} ${np.details.data.channel.verified ? '☑️' : ''}](${np.details.data.channel.url}) \n\n` +
                    `上傳日期：${np.details.data.uploadDate}\n\n` +
                    `觀看次數：${np.details.data.viewCount.replace(/(.)(?=(\d{3})+$)/g, '$1,')}\n\u200b`;
                res.setThumbnail(np.details.data.thumbnailUrl);
            } else {
                des = `正在播放：[${np.title === 'unknown' ? np.audioResource : np.title}](${np.audioResource})\n\n` +
                    `播放時間：${timeResolve(~~(np.playedMs / 1000))}`;
            }

            res.setDescription(des)
                .setFooter(`由 ${np.player.user.tag} 指定的樂曲`, np.player.user.displayAvatarURL());


            interaction.editReply({
                embeds: [res],
            });
        }
        if (interaction.commandName === 'queue') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            await interaction.deferReply();

            const manager = interaction.client.music.get(interaction.guild.id);

            const queue = manager.queue
                .map(track => {
                    const name = track.title === 'unknown' ? track.audioResource : track.title;
                    const url = track.details.from === 'Youtube' ? track.details.data.url : track.audioResource;
                    return `[${name}](${url})`;
                });

            if (!queue.length && !manager.isPlaying) {
                res.setDescription('隊列中沒有任何歌曲');
                return interaction.editReply({
                    embeds: [res],
                });
            }

            const pages = [];
            const np = interaction.client.music
                .get(interaction.guild.id).nowPlaying;

            const nowPlaying = {
                name: np.title === 'unknown' ? np.audioResource : np.title,
                url: np.details.from === 'Youtube' ? np.details.data.url : np.audioResource,
            };

            queue.forEach((v, i) => {
                const index = ~~(i / 8);
                if (i % 8 === 0) pages.push([]);
                pages[index].push(`\` ${twoDigits(i + 1)} \` ${v}`);
            });

            if (!pages.length) pages.push([]);

            const pageButtons = {
                home: new MessageButton({
                    customId: 'PageButtonHome',
                    label: '|<',
                    style: 'PRIMARY',
                    disabled: true,
                }),
                prev: new MessageButton({
                    customId: 'PageButtonPrev',
                    label: '<',
                    style: 'PRIMARY',
                    disabled: true,
                }),
                exit: new MessageButton({
                    customId: 'PageButtonExit',
                    label: 'x',
                    style: 'DANGER',
                }),
                next: new MessageButton({
                    customId: 'PageButtonNext',
                    label: '>',
                    style: 'PRIMARY',
                    disabled: pages.length < 2,
                }),
                end: new MessageButton({
                    customId: 'PageButtonEnd',
                    label: '>|',
                    style: 'PRIMARY',
                    disabled: pages.length < 2,
                }),
            };

            let index = 0;

            const row = new MessageActionRow({
                components: Object.values(pageButtons),
            });

            res.setAuthor('音樂中心', interaction.client.user.displayAvatarURL())
                .setDescription(`\` >> \` [${nowPlaying.name}](${nowPlaying.url})\n\n${pages[0].join('\n')}`)
                .setFooter(`${interaction.user.tag}・第 ${index + 1}/${pages.length} 頁`, interaction.user.displayAvatarURL());


            interaction.editReply({
                embeds: [res],
                components: [row],
            })
                .then(message => {
                    message.createMessageComponentCollector({
                        async filter(i) {
                            if (!i.customId.startsWith('PageButton')) return false;
                            await i.deferUpdate();
                            if (i.user.id !== interaction.user.id) {
                                i.followUp({
                                    content: '請勿使用他人的按鈕',
                                    ephemeral: true,
                                });
                                return false;
                            }
                            return true;
                        },
                        idle: 30e3,
                        componentType: 'BUTTON',
                    }).on('collect', function(i) {
                        if (i.customId === 'PageButtonExit') {
                            i.followUp({
                                content: '清單已關閉',
                                ephemeral: true,
                            });
                            this.stop('EXIT');
                            return message.delete();
                        }

                        switch (i.customId) {
                        case 'PageButtonHome':
                            index = 0;
                            break;
                        case 'PageButtonPrev':
                            index--;
                            break;
                        case 'PageButtonNext':
                            index++;
                            break;
                        case 'PageButtonEnd':
                            index = pages.length - 1;
                            break;
                        }

                        pageButtons.home.setDisabled(index == 0);
                        pageButtons.prev.setDisabled(index == 0);
                        pageButtons.next.setDisabled(index == pages.length - 1);
                        pageButtons.end.setDisabled(index == pages.length - 1);

                        res.setDescription(`\` >> \` [${nowPlaying.name}](${nowPlaying.url})\n\n${pages[index].join('\n')}`)
                            .setFooter(`${interaction.user.tag}・第 ${index + 1}/${pages.length} 頁`, interaction.user.displayAvatarURL());

                        const newRow = new MessageActionRow({
                            components: Object.values(pageButtons),
                        });

                        interaction.editReply({
                            embeds: [res],
                            components: [newRow],
                        });
                    }).once('end', (_, reason) => {
                        if (reason === 'EXIT') return;
                        message.delete();
                        interaction.followUp({
                            content: '清單因閒置過久而自動關閉',
                            ephemeral: true,
                        });
                    });
                });
        }
        if (interaction.commandName === 'remove') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                res.setDescription('機器人不在任何語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                res.setDescription('機器人不在你的語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }

            if (!manager.queue.length) {
                res.setDescription('隊列裡沒有任何音樂');
                return interaction.reply({
                    embeds: [res],
                });
            }

            await interaction.deferReply();

            const start = interaction.options.getInteger('start');
            let end = interaction.options.getInteger('end') ?? start;

            if (end < start) {
                res.setDescription('結尾的數字不能小於起始');
                return interaction.editReply({
                    embeds: [res],
                });
            }

            if (start < 1 || end < 0) {
                res.setDescription('起始的音樂不能小於第一首');
                return interaction.editReply({
                    embeds: [res],
                });
            }

            if (start > manager.queue.length) {
                res.setDescription('起始音樂大於歌曲列表長度');
                return interaction.editReply({
                    embeds: [res],
                });
            }

            if (end > manager.queue.length) {
                end = manager.queue.length;
            }

            manager.queue.splice(start - 1, end - start + 1);
            res.setDescription(`${interaction.user}，已移除編號在 ${start} 到 ${end} 之間的所有歌曲`);
            if (start === end)
                res.setDescription(`${interaction.user}，已移除編號為 ${start} 的歌曲`);

            interaction.editReply({
                embeds: [res],
            });

        }
        if (interaction.commandName === 'leave') {
            const res = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            const voiceChannel = interaction.member.voice.channel;
            if (!voiceChannel) {
                res.setDescription('您不在任何語音頻道內');
                return interaction.reply({
                    embeds: [res],
                });
            }
            try {
                interaction.client.music.leave(interaction.guild.id);
            } catch (error) {
                res.setDescription('機器人發生錯誤，請檢察指令或回報');
                return interaction.reply({
                    embeds: [res],
                });
            }

            res.setDescription('機器人成功離開語音頻道');
            return interaction.reply({
                embeds: [res],
            });
        }
        if (interaction.commandName === 'list-server') {
            if (interaction.user.id == config.owner) {
                client.guilds.cache.forEach(guild => {
                    console.log(chalk.yellow('所在伺服 ') + `${guild.name} | ${guild.id}`);
                });
                interaction.reply('已在控制台列出所有所在伺服器');
            } else {
                interaction.reply('此指令為機器人擁有者專屬指令');
            }
        }
        if (interaction.commandName === 'say-secret') {
            const contents = interaction.options.getString('content');
            interaction.channel.send(contents);
            interaction.reply({
                content: '已經成功發送指定訊息',
                ephemeral: true,
            });
        }
        if (interaction.commandName === 'presence') {
            const presence = interaction.options.getString('presence');
            if (interaction.user.id == config.owner) {
                client.user.setStatus(`${presence}`);
                interaction.reply('成功設定機器人狀態');
            } else {
                interaction.reply('此指令為機器人擁有者專屬指令');
            }
        }
        if (interaction.commandName === 'help') {
            let res = new MessageEmbed()
                .setAuthor('指令中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);
            const commands = [];
            const cmdDirs = fs.readdirSync('./commands');
            for (const dir of cmdDirs) {
                const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
                for (const file of commandFiles) {
                    const command = require(`./commands/${dir}/${file}`);
                    commands.push(command.data.toJSON());
                }
            }
            await interaction.deferReply();

            const pages = commands.length - 1;

            const pageButtons = {
                home: new MessageButton({
                    customId: 'PageButtonHome',
                    label: '|<',
                    style: 'PRIMARY',
                    disabled: true,
                }),
                prev: new MessageButton({
                    customId: 'PageButtonPrev',
                    label: '<',
                    style: 'PRIMARY',
                    disabled: true,
                }),
                exit: new MessageButton({
                    customId: 'PageButtonExit',
                    label: 'x',
                    style: 'DANGER',
                }),
                next: new MessageButton({
                    customId: 'PageButtonNext',
                    label: '>',
                    style: 'PRIMARY',
                    disabled: pages.length < 2,
                }),
                end: new MessageButton({
                    customId: 'PageButtonEnd',
                    label: '>|',
                    style: 'PRIMARY',
                    disabled: pages.length < 2,
                }),
            };

            let index = 0;

            const row = new MessageActionRow({
                components: Object.values(pageButtons),
            });

            res = new MessageEmbed()
                .setAuthor('指令列表', interaction.client.user.displayAvatarURL())
                .setDescription('機器人的指令清單')
                .setFooter(`${interaction.user.tag}・第 ${index + 1}/${pages} 頁`, interaction.user.displayAvatarURL())
                .addFields({
                    name: `/${commands[index].name}`,
                    value: `${commands[index].description}`,
                });

            interaction.editReply({
                embeds: [res],
                components: [row],
            })
                .then(message => {
                    message.createMessageComponentCollector({
                        async filter(i) {
                            if (!i.customId.startsWith('PageButton')) return false;
                            await i.deferUpdate();
                            return true;
                        },
                        idle: 30e3,
                        componentType: 'BUTTON',
                    }).on('collect', function(i) {
                        if (i.customId === 'PageButtonExit') {
                            this.stop('EXIT');
                            return message.delete();
                        }

                        switch (i.customId) {
                        case 'PageButtonHome':
                            index = 0;
                            break;
                        case 'PageButtonPrev':
                            index--;
                            break;
                        case 'PageButtonNext':
                            index++;
                            break;
                        case 'PageButtonEnd':
                            index = pages - 1;
                            break;
                        }

                        pageButtons.home.setDisabled(index == 0);
                        pageButtons.prev.setDisabled(index == 0);
                        pageButtons.next.setDisabled(index == pages - 1);
                        pageButtons.end.setDisabled(index == pages - 1);

                        res = new MessageEmbed()
                            .setAuthor('指令列表', interaction.client.user.displayAvatarURL())
                            .setDescription('機器人的指令清單')
                            .setFooter(`${interaction.user.tag}・第 ${index + 1}/${pages} 頁`, interaction.user.displayAvatarURL())
                            .addFields({
                                name: `/${commands[index].name}`,
                                value: `${commands[index].description}`,
                            });

                        const newRow = new MessageActionRow({
                            components: Object.values(pageButtons),
                        });

                        interaction.editReply({
                            embeds: [res],
                            components: [newRow],
                        });
                    }).once('end', (_, reason) => {
                        if (reason === 'EXIT') return;
                        message.delete();
                    });
                });
        }
        if (interaction.commandName === 'yt-search') {
            const ares = new MessageEmbed()
                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                .setColor(0xE4FFF6);

            if (!interaction.client.music.has(interaction.guild.id)) {
                ares.setDescription('機器人不在任何語音頻道中');
                return interaction.reply({
                    embeds: [ares],
                });
            }

            const manager = interaction.client.music.get(interaction.guild.id);

            if (!interaction.member.voice.channel ||
                interaction.member.voice.channel.id !== manager.channel.id) {

                ares.setDescription('機器人不在您的語音頻道中');
                return interaction.reply({
                    embeds: [ares],
                });
            }
            await interaction.deferReply();
            const query = interaction.options.getString('search');

            const results = await YoutubeUtils.search(query, 15);

            const res = new MessageEmbed()
                .setAuthor('搜尋中心', interaction.client.user.displayAvatarURL())
                .setDescription(`${interaction.user}，以下為搜尋結果\n請使用選單選擇你要播放的音樂，或點擊按鈕離開\n\n` +
                    results.map((r, i) => `\`${i + 1}. \` ${r.title}`).join('\n\n'))
                .setColor(0xE4FFF6);

            const select = new MessageSelectMenu({
                customId: 'MusicSearchSelectMenu',
                placeholder: '請選擇',
                options: results.map((r, i) => ({
                    label: `${i + 1}`,
                    description: r.title,
                    value: `${i}`,
                })),
            });

            const exitButton = new MessageButton({
                customId: 'MusicSearchExitButton',
                label: '取消',
                emoji: '❌',
                style: 'DANGER',
            });

            const selectRow = new MessageActionRow({
                components: [select],
            });

            const buttonRow = new MessageActionRow({
                components: [exitButton],
            });

            const message = await interaction.editReply({
                embeds: [res],
                components: [selectRow, buttonRow],
            });

            message.awaitMessageComponent({
                async filter(i) {
                    if (!i.customId.startsWith('MusicSearch')) return false;
                    await i.deferUpdate();
                    if (i.user.id !== interaction.user.id) {
                        i.followUp({
                            content: i.isButton() ? '您無法使用他人的按鈕' : '您無法使用他人的選單',
                            ephemeral: true,
                        });
                        return false;
                    }
                    return true;
                },
                time: 30e3,
                error: ['time'],
            })
                .then(i => {
                    if (i.isButton()) {
                        i.followUp({
                            content: '已結束搜尋',
                            ephemeral: true,
                        });
                        return message.delete();
                    }
                    const selectIndex = i.values[0];
                    const data = results[selectIndex];
                    message.delete();
                    data.play(interaction.client.music.get(interaction.guild.id), {
                        player: interaction.member,
                    })
                        .then(async ([track, queued]) => {
                            await track.details.data.fetch();
                            res.setThumbnail(track.details.data.thumbnailUrl)
                                .setAuthor('通知中心', interaction.client.user.displayAvatarURL())
                                .setFooter(`由 ${track.player.displayName} 指定的歌曲`, track.player.user.displayAvatarURL());
                            if (queued) {
                                res.setDescription(`已將 [${track.title}](${track.details.data.url}) 加入隊列`);
                            } else {
                                res.setDescription(`開始播放 [${track.title}](${track.details.data.url})`);
                            }
                            interaction.channel.send({
                                embeds: [res],
                            });
                        })
                        .catch(e => {
                            if (e.message === 'INVALID_YOUTUBE_URL') {
                                return i.followUp({
                                    content: '機器人無法播放這首歌曲',
                                });
                            }
                            throw e;
                        });
                })
                .catch(() => {
                    message.delete();
                    interaction.followUp({
                        content: '搜尋因閒置過久而自動關閉',
                        ephemeral: true,
                    });
                });
        }
        if (interaction.commandName === 'avatar') {
            const user = interaction.options.get('user').user;
            const embed = new MessageEmbed()
                .setTitle(`${user.username}的頭像：`)
                .setImage(user.displayAvatarURL({
                    dynamic: true,
                }))
                .setColor('0x00ae86');

            return interaction.reply({
                embeds: [embed],
            });
        }
        if (interaction.commandName === 'together-youtube') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'youtube').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-poker') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'poker').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-chess') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'chess').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-betrayal') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'betrayal').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-fishington') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'fishing').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-letter-tile') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'lettertile').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-words-snack') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'wordsnack').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-doodle-crew') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'doodlecrew').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-spellcast') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'spellcast').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'together-awkword') {
            if (!interaction.member.voice.channel) return interaction.reply('請先加入一個語音頻道');
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'awkword').then(async invite => {
                return interaction.reply(`${invite.code}`);
            });
        }
        if (interaction.commandName === 'mora') {
            const youcho = interaction.options.getString('choose');
            let a = '';
            if (youcho == 'sci') {
                a = '剪刀';
            } else if (youcho == 'sto') {
                a = '石頭';
            } else {
                a = '布';
            }
            let b = '';
            const botcho = `${pss[getRandom(pss.length) - 1]}`;
            if (botcho == 'sci') {
                b = '剪刀';
            } else if (botcho == 'sto') {
                b = '石頭';
            } else {
                b = '布';
            }
            if (youcho == botcho) return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：雙方選擇相同，平手`);
            if (youcho == 'sci' && botcho == 'sto') return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：您輸了`);
            if (youcho == 'sci' && botcho == 'pap') return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：您贏了`);
            if (youcho == 'pap' && botcho == 'sto') return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：您贏了`);
            if (youcho == 'pap' && botcho == 'sci') return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：您輸了`);
            if (youcho == 'sto' && botcho == 'sci') return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：您贏了`);
            if (youcho == 'sto' && botcho == 'pap') return interaction.reply(`你選擇：${a}；機器人選擇：${b}\n結果：您輸了`);
        }
        if (interaction.commandName === 'bullshitter') {
            const bullreply = `${bullshitter[getRandom(bullshitter.length) - 1]}`.replace(/<name>/g, topic);
            const topic = interaction.options.getString('topic');
            const replyans = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`${topic}`)
                .setDescription(`${bullreply}`)
                .setFooter(`${interaction.user.tag}`, `${interaction.user.displayAvatarURL()}`);
            interaction.reply({
                embeds: [replyans],
            });
        }
    });
    /*
    client.on('interactionCreate', interaction => {
        if (!interaction.isButton()) return;
        if (interaction.customId === 'startinq') {

        }
    });
    */

    // config.token登入
    client.login(config.token);

};

module.exports = startbot;
