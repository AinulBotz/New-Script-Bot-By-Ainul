let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

Cari aja di github gw

github:
https://github.com/AinulBotz

JOIN GC BOT:
https://chat.whatsapp.com/CX2P0QnBXya9irl5xJJKH6

conn.sendBut(m.chat, esce, 'Jangan Lupa subscribe ', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
