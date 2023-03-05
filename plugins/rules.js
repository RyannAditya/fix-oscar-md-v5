let fs = require('fs')
let moment = require('moment-timezone')
let rules = `*RULES BOT*
❖ No Spam Command
❖ No Send Bug Ke Bot & Owner
❖ No Telp & Vc Bot
❖ No Telp & Vc Ownef
❖ No Hina Bot
❖ Jika Melanggar Akan Di Block
❖ Jangan Lupa Patuhi Rules !!!
❏┳━━◩
┍┛
┆⫹⫺ Halo Kak ${name}
└─┈⟅`
let nth = `*Rules Zx-Botz Multi Device*`
conn.send3ButtonImg(m.chat, `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`, nth, rules, 'Sosial Media', '.sosialmedia', 'Owner', '.owner', 'Donasi', '.donasi', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://wa.me/p/5489299044451325/62822522851432',
    mediaType: 2, 
    description: gc,
    title: "Sᴇᴡᴀ Cʜᴀᴛ ᴏᴡɴᴇʀ!!!",
    body: wm,
    thumbnail: fs.readFileSync('thumbnail.jpg'),
    sourceUrl: 'https://wa.me/62822522851432',
     }}
  })
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
