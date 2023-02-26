let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `【 Sosial Media 】`
const sections = [
   {
	title: ` Support Me`,
	rows: [
	{title: `All Script`, rowId: ".sc", description: "Jangan Lupa Kasih Star"},
	{title: `Youtube Owner`, rowId: ".ytowner", description: "My Youtube"},
	{title: `Instagram`, rowId: ".igowner", description: "Jangan Lupa Follow Mek"},
	{title: `Group Bot Info`, rowId: ".gc3", description: "Untuk Memgetahui update info bot"},
]
  },{
	title: ` Grup Bot Ofc`,
	rows: [
	    	{title: `Grup Bot`, rowId: ".gc1", description: "Jangan Lupa Join"},
	{title: `Grup Bot Diskusi`, rowId: ".gc2", description: "Patuhi Rules Tod"},
	]
  },{
	title: ` SUPPORT ME –––––––·•`,
	rows: [
	    {title: "╿💹╿ Donasi", rowId: ".donasi"},
	{title: "╿🔖╿ Sewa", rowId: ".sewa"},
	{title: "╿🌟╿ Buy Premium", rowId: ".premium"},
	]
  },
]

//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./image/3SBot.jpg')}}
	}

const listMessage = {
  text: ` `,
  footer: teks,
  title: 'ᴄʟɪᴄᴋ ʙᴜᴛᴛᴏɴ ɴᴏᴡ!',
  buttonText: "ᴄʟɪᴄᴋ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fcon, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['sosialmedia']
handler.tags = ['info']
handler.command = /^(sosialmedia)/i
handler.register = false

module.exports = handler