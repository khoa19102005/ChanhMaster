//IMPORT FILE DATA
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { databasing, escapeRegex} = require("../../modules/functions")
//import the Discord Library
const Discord = require("discord.js");
let cpuStat = require("cpu-stat");
let os = require("os");
// HERE THE EVENT STARTS
module.exports = (client, message, args, cmd, prefix) => {

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.reply("Chưa có quyênd gửi Embed!")

    if (!args[0])
      return message.reply(new Discord.MessageEmbed()
        .setColor(ee.color)
        .setTitle("Tất cả các lện!")
        .addField(`\`${prefix}help general\``, "Hiện thị tất cả các lệnh!", true)
        .addField(`\`${prefix}help setup\``, "> *Hiện thị tất cả các lệnh Setup*", true)
        .addField(`\`${prefix}help voice\``, "> *Hiện thị tất cả các lệnh Voice Channel*", true)
      )
    switch (args[0].toLowerCase()) {
      case "general":
        return message.reply(new Discord.MessageEmbed()
          .setColor(ee.color)
          .setTitle("These are all cmds!")
          .setDescription(`PREFIX: \`${prefix}\``)
          .addField(`\`${prefix}help\``, "Hiện thị tất cả các lệnh!", true)
          .addField(`\`${prefix}add\``, "> *[Invite](https://discord.com/api/oauth2/authorize?client_id=863837289863446577&permissions=8&scope=bot)!*", true)
          .addField(`\`${prefix}ping\``, "> *Ping!*", true)
          .addField(`\`${prefix}uptime\``, "> *Uptime!*", true)
          .addField(`\`${prefix}info\``, "> *Info!*", true)
          .setFooter(ee.footertext, ee.footericon)
        )
        break;
      case "setup":
        return message.reply(new Discord.MessageEmbed()
          .setColor(ee.color)
          .setTitle("These are all cmds!")
          .setDescription(`PREFIX: \`${prefix}\``)
          .addField(`\`${prefix}setup\` --> Follow steps`, "> *Tạo Temp Voice*")
          .addField(`\`${prefix}setupname <ChannelName>\``, "> *Đổi Created temp. Voice Channel's Name!* \n")
          .setFooter(ee.footertext, ee.footericon)
        )
        break;
      case "voice":
        return message.reply(new Discord.MessageEmbed()
          .setColor(ee.color)
          .setTitle("Hiện thị tất cả các lệnh!")
          .setDescription(`PREFIX: \`${prefix}\`**`)
          .addField(`\`${prefix}lock\``, "Locks Voice Channel!", true)
          .addField(`\`${prefix}unlock\``, "> *Unlocks Voice Channel!*", true)
          .addField(`\`${prefix}kick @User\``, "> *Kicks!*", true)
          .addField(`\`${prefix}ban @User\``, "> *Kicks and Bans!*", true)
          .addField(`\`${prefix}unban @User\``, "> *Unbans!*", true)
          .addField(`\`${prefix}trust @User\``, "> *Trusts!*", true)
          .addField(`\`${prefix}untrust @User\``, "> *Untrusts!!*", true)
          .addField(`~~\`${prefix}rename <CHANNEL_NAME>\`~~`, "> *~~Đổi tên Channel(20 Sec cooldown)~~*", true)
          .addField(`\`${prefix}limit <UserLimit>\``, "> *Limit lại*", true)
          .addField(`\`${prefix}rename @User\``, "> *Rename!*", true)
          .addField(`\`${prefix}bitrate <Bitrate in bits>\``, "> *Channel's bitrate*", true)
          .addField(`\`${prefix}vcinvite @User [optional message]\``, "> *Mời vô Voice Channel*", true)
          .addField(`\`${prefix}promote @User\``, "> *Chuyển chủ*", true)
          .setFooter(ee.footertext, ee.footericon)
        )
        break;
      default:
        return message.reply(new Discord.MessageEmbed()
          .setColor(ee.color)
          .setTitle("Hiện thị tất cả các lệnh!")
          .setURL("https://youtu.be/zNE8insVgOA")
          .setDescription(`PREFIX: \`${prefix}\`|\`${prefix}voice\``)
          .addField(`\`${prefix}general\``, "Hiện thị tất cả các lệnh general/Information Commands!", true)
          .addField(`\`${prefix}setup\``, "> *Hiện thị tất cả các lệnh Setup*", true)
          .addField(`\`${prefix}voice\``, "> *Hiện thị tất cả các lệnh Voice Channel*", true)
        )
        break;

    }
}
