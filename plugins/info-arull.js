let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Ainul
║│➸ ```UMUR``` : 14thn
║│➸ ```ASAL``` : KALIMANTAN SELATAN
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/CX2P0QnBXya9irl5xJJKH6
║│➸ ```ISTAGRAM``` : http://instagram.com/ainul_181
║│➸ ```WHATSAPP``` : http://wa.me/6285754202785
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
