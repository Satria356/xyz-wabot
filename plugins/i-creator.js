let handler = function (m) {
   this.sendContact(m.chat, '62882008369956', 'IrwanX', m)
   return m.reply ('Chat *P* Tidak Di Balas')
   /*conn.sendMessage(m.chat, { sticker: require('fs').readFileSync('./src/menu.webp')})
  let contacts = []
  for (let owner of Object.entries(global.Owner).filter(v => v[1].isCreator)) {
    contacts.push(...[owner[0], owner[1].name])
  }
  if (contacts.length < 3) return this.sendContact(m.chat, contacts[0], contacts[1], m)
  this.sendContactArray(m.chat, contacts, m)*/
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
