let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya EnCode-Botz Jangan Lupa Follow Github Owner', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tes']

handler.admin = true
handler.group = true

module.exports = handler
