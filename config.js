global.you = ['62822522851432'] 
//Developer Bot
global.namebot = 'Zx-Botz'
global.rowner = ['62822522851432', '62822522851432'] // Real Owner Bot
global.owner = ['62822522851432'] // Owner Bot
global.police = [] // Police Bot
global.mods = []  // Want some help?
global.prems = [] // Premium user has unlimited limit

global.helper = ['62822522851432']
global.api = '45083080630f3830a5bed882'
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  males : 'https://malesin.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': 'pelitbetsihluwh',
}

global.socket = {
	qr: true,
	version: false,
	logger: true,
	retryMap: false,
	pendingMessage: false,
}

global.useMulti = false

global.media = 'https://telegra.ph/file/968d978cd8f647d6a133c.jpg'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/968d978cd8f647d6a133c.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

//global sosialmedia oscar
global.sc = "⫹⫺ Nih Jangan Lupa Kasih Star https://github.com/JarotOffc?tab=repositories"
global.sgc = 'https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'
global.gc1 = '⫹⫺ Nih Jangan Lupa Join https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'
global.instagram = '⫹⫺ Nih Jangan Lupa Follow https://instagram.com/zvkhalxst'
global.ytowner = '⫹⫺ Gada YT'
global.gc2 = '⫹⫺ Nih Jangan Lupa Join https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'
global.diskusi = '⫹⫺ Nih Jangan Lupa Join https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'
// Sticker WM
global.packname = 'Zx-Botz'
global.author = 'ZxYanzZ'
global.wm = '© Zx-Botz'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
