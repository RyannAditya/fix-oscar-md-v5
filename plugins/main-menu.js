//Made By Jarot Offc
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┌────〔 %me 〕───⬣
│⬡ Hai, %name!
│⬡ Tersisa *%limit Limit*
│⬡ Role *%role*
│⬡ Level *%level (%exp / %maxexp)*
│⬡ [%xp4levelup]
│⬡ %totalexp XP secara Total
│⬡ Hari: *%week %weton*
│⬡ Tanggal: %date
│⬡ Waktu: *%time*
│⬡ Uptime: *%uptime (%muptime)*
│⬡ Database: %rtotalreg dari %totalreg
╰────────────⬣`.trim(),
  header: '*┌──〔 %category〕*',
  body: '*│*⦁ %cmd %islimit %isPremium',
  footer: '*└────⦁*\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'rpg': 'Epic Rpg',
    'group': 'Grup',
    'asupan': 'ASUPAN',
    'anime': 'Anime',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Islam',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'asupan') tags = {
    'asupab': 'ASUPAN'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
   const sections = [
{
title: `┄┄┄┄┅┅| SUPPORT |┅┅┄┄┄┄`,
	rows: [
	    {title: `╿🔖╿ Sewa Bot`, rowId: ".sewa", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙻𝚒𝚜𝚝 𝙷𝚊𝚛𝚐𝚊 𝚂𝚎𝚠𝚊𝚋𝚘𝚝"},
	    {title: `╿🌟╿ Upgrade Premium`, rowId: ".premium", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙻𝚒𝚜𝚝 𝙷𝚊𝚛𝚐𝚊 𝚄𝚙𝚐𝚛𝚊𝚍𝚎 𝙿𝚛𝚎𝚖𝚒𝚞𝚖"},
	    {title: `╿💰╿ Donasi`, rowId: ".donasi", description: "𝚂𝚞𝚙𝚘𝚛𝚝 𝙱𝚘𝚝 𝙰𝚐𝚊𝚛 𝙷𝚒𝚍𝚞𝚙 𝚂𝚎𝚕𝚊𝚖𝚊 𝟸𝟺 𝙹𝚊𝚖"},
	{title: `╿✨╿ Sosial Media Bot`, rowId: ".sosialmedia", description: '𝚂𝚞𝚙𝚙𝚘𝚛𝚝 𝙱𝚘𝚝 𝙰𝚐𝚊𝚛 𝚂𝚎𝚖𝚊𝚗𝚐𝚊𝚝 𝚄𝚙𝚍𝚊𝚝𝚎'},
	]
	},{
title: `⃟⟣⟚⟝ ⟡ List Menu ${namebot} ⟡ ⟞⟚⟢⃟`,
rows: [
{title: `╿💬╿ Semua Perintah`, rowId: ".? all", description: "Menampilkan Semua Perintah"},
{title: `╿🌱╿ Menu Game Rpg`, rowId: ".? rpg", description: "Menampilkan List Menu RGP"},
{title: `╿✨╿ Menu Exp`, rowId: ".? xp", description: "Menampilkan List Menu Exp"},
{title: `╿🎮╿ Menu Game`, rowId: ".? game", description: "Menampilkan List Menu Game"},
{title: `╿🧩╿ Menu Fun`, rowId: ".? fun", description: "Menampilkan List Menu Fun"},
{title: `╿🐚╿ Menu Kerang`, rowId: ".? kerangajaib", description: "Menampilkan List Menu Kerang"},
{title: `╿⛽╿ Menu Jadibot`, rowId: ".? quotes", description: "Menampilkan List Menu Jadibot"},
{title: `╿📑╿ Menu Quotes`, rowId: ".? quotes", description: "Menampilkan List Menu Qoutes"},
{title: `╿⛩️╿ Menu Anime`, rowId: ".? anime", description: "Menampilkan List Menu Anime"},
{title: `╿🌟╿ Menu Premium `, rowId: ".? premium", description: "Menampilkan List Menu Premium"},
{title: `╿🎭╿ Menu Anonymous Chats`, rowId: ".? anonymous", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Anonymous Chat"},
{title: `╿📖╿ Menu Al-Quran`, rowId: ".? quran", description: "Menampilkan List Menu Al-Quran"},
{title: `╿🌐╿ Menu Internet`, rowId: ".? internet", description: "Menampilkan List Menu Internet"},
{title: `╿♻️╿ Menu Berita`, rowId: ".? berita", description: "Menampilkan List Menu Berita"},
{title: `╿📩╿ Menu Donwloader`, rowId: ".? downloader", description: "Menampilkan List Menu Downloader"},
{title: `╿🎨╿ Menu Sticker`, rowId: ".? stiker", description: "Menampilkan List Menu Sticker"},
{title: `╿✏️╿ Menu Nulis`, rowId: ".? nulis", description: "Menampilkan List Menu Nulis"},
{title: `╿🎧╿ Menu Audio`, rowId: ".? audio", description: "Menampilkan List Menu Audio"},
{title: `╿🏢╿ Menu Group`, rowId: ".? group", description: "Menampilkan List Menu Group"},
{title: `╿🗂️╿ Menu Database`, rowId: ".? database", description: "Menampilkan List Menu Database"},
{title: `╿🛠️╿ Menu Tools`, rowId: ".? tools", description: "Menampilkan List Menu Tools"},
{title: `╿ℹ️️╿ Menu Info`, rowId: ".? info", description: "Menampilkan List Menu Info"},
{title: `╿👨‍💻╿ Menu Owner`, rowId: ".? owner", description: "Menampilkan List Menu Owner"},
]
}, {
title: `Informasi Bot ${namebot} `,
rows: [
  {title: `╿📛╿ SPEED`, rowId: ".speed", description: "Kecepatan Respon Bot"},
	    {title: `╿💌╿ OWNER`, rowId: ".owner", description: "Menampilkan Nomor Owner/Developer Bot"},
	    {title: `╿📔╿ SCRIPT`, rowId: ".sc", description: `Source Code ${namebot}`},
	{title: `╿🗣️╿ REQUEST FITUR`, rowId: ".request", description: "Request Fitur Baru"},
	{title: `╿👥╿ THANKS TO`, rowId: ".tqto", description: "Menampilkan List Tqto Bot"},
]}]
let psan = 'bagaimana kabarmu?'
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tagnya = `@${m.sender.split`@`[0]}`

let jarot = `┏─────────────────⬣
┆ Hai, ${tagnya} 👋
┗┬──────────────┈ ⳹
┏┆♠︎ Name : ${name}
┃┆♠︎ Limit : ${limit}
┃┆♠︎ Money : ${money}
┃┆♠︎ Exp : ${exp}
┃┆♠︎ Level : ${level}
┃┆♠︎ Role : ${role}
┗┬──────────────┈ ⳹
┏┤   Calendar
┆┗──────────────┈ ⳹
┆♠︎ Day : ${week} ${weton}
┆♠︎ Uptime : ${uptime}
┆♠︎ Time :  ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
┆︎︎♠︎ Date : ${date}
┗─────────────────⬣`
let hariRayaramadan = new Date('April 21, 2023 23:59:59') 
     let sekarangg = new Date().getTime() 
     let lebih = hariRayaramadan - sekarangg 
     let harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
     let jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     let menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
     let detikk = Math.floor( lebih % (1000 * 60) / 1000) 
let fot = `Note: Jika menemukan fitur bot yang error/Menemukan Bug 
Silahkan Lapor Ke Owner Dengan Ketik #Report
`
const listMessage = {
footer: fot,
text: 'Made By Ryann.Dev',
mentions: await conn.parseMention(jarot),
title: jarot,
buttonText: `Click Here ⎙`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(jarot), contextInfo:{ forwardingScore: 99999, isForwarded: true }}) 
}     
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      ucapan: global.ucapan,
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 //FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
    //------------------ DOCUMENT
let gh = 'https://github.com/RyannAditya?tab=repositories'
let buttonMessage= {
'document':{'url':gh},
'mimetype': 'application/pdf',
'fileName':'Bot WhatsApp By Ryann.Dev',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl': 'https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq',
'title': 'Bot MD By Ryan',
'body':'',
'mediaType': 2,
'thumbnail': fs.readFileSync('./thumbnail.jpg'),
'sourceUrl': 'https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'}},
'caption': `             *『 D A S H B O A R D』*`,
'footer': text,
'buttons':[
{'buttonId':'.owner','buttonText':{'displayText': 'Owner 👨‍💻'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText': 'Donasi 💰'},'type':1},
{'buttonId':'.rules','buttonText':{'displayText': 'Rules Bot 🖋'},'type':1},

],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:fcon})
    conn.sendFile(m.chat, './mp3/jarot.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', fcon)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
