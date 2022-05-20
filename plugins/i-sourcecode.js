let handler = async (m) => {
m.reply(`
Bot ini Menggunakan Script Dari

https://nekopoi.care`)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


