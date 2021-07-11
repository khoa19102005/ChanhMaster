//IMPORT FILE DATA
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const prefix = ".";
const {
    databasing,
    escapeRegex,
    reset_DB
} = require("../../modules/functions")
//import the Discord Library
const Discord = require("discord.js");
// HERE THE EVENT STARTS
module.exports = (client, guild) => {
    if (!guild) return;
    //find a channel instance, inside of the guild, where the bot has the Permission, to send a message
    let channel = guild.channels.cache.find(
        channel =>
        channel.type === "text" &&
        channel.permissionsFor(guild.me).has("SEND_MESSAGES")
    );
    //if no channel found return
    if(!channel) return;
    //reset the database
    reset_DB(guild.id, client)
    //if he has the permissions to send embeds, send an embed
    if (channel.permissionsFor(guild.me).has("EMBED_LINKS")) {
        channel.send(new Discord.MessageEmbed()
            .setColor(ee.color)
            .setTitle("Hello cả nhà em ChanhhMaster zo ròi đây!!!")
            .setDescription(`PREFIX: \`${prefix}\``)
            .addField(`\`${config.prefix}help\``, "Hiển thị tất cả các lệnh!", true)
            .addField(`\`${config.prefix}add\``, "> *[Invite](https://discord.com/api/oauth2/authorize?client_id=863837289863446577&permissions=8&scope=bot) the Bot!*", true)
            .addField(`\`${config.prefix}ping\``, "> *Hiển thị ping của Bot!*", true)
            .addField(`\`${config.prefix}uptime\``, "> *Hiển thị thời gian hoạt động của Bot!*", true)
            .addField(`\`${config.prefix}info\``, "> *Hiển thị info*", true)
            .addField("\u200b", "\u200b")
            .addField(`\`${config.prefix}setup\` --> Follow steps`, "> *Set ups!*")
            .addField("\u200b", "\u200b")
            .addField("Để nhận danh sách tất cả các lệnh", `\`${config.prefix}help\``)

            .setFooter(ee.footertext, ee.footericon)
        )
        channel.send(new Discord.MessageEmbed()
            .setColor(ee.color)
            .setTitle("Thanks for Inviting me!")
            .setDescription(`Để bắt đầu, chỉ cần nhập: \`${config.prefix}setup\` và làm theo các bước!`)
            .setFooter(ee.footertext, ee.footericon)
        )
    } else {
        channel.send(
            `**Cảm ơn đã mòi em Chanhh!**\n\nĐể bắt đầu, chỉ cần nhập: \`${config.prefix}setup\` và làm theo các bước!\nNhập: \`${config.prefix}help\` Để nhận danh sách tất cả các lệnh!`
        )
    }

}
