const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('presence')
    .setDescription('僅機器人擁有者可用的指令 (更改機器人的狀態)')
    .addStringOption((option) =>
        option
            .setName('presence')
            .setDescription('狀態選擇')
            .setRequired(true)
            .addChoice('在線', 'online')
            .addChoice('閒置', 'idle')
            .addChoice('勿擾', 'dnd')
            .addChoice('隱形', 'invisible'),
    );
module.exports = { data };
