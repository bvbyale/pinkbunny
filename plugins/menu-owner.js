import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const url = global.md
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━━━━━┓
┃ ◉— *🅗🅐🅒🅗🅘🅚🅞-🅑🅞🅣-🅜🅓* —◉
┃☆≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡☆
┣⟣☯︎ 𝙱𝙾𝚃         ʜᴀᴄʜɪᴋᴏ-ʙᴏᴛ-ᴍᴅ
┣⟣☯︎ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁  ʜᴀᴄʜᴇᴊᴏᴛᴀ
┣⟣☯︎ 𝙽𝚄𝙼𝙴𝚁𝙾: +51 992 004 117
┣⟣☯︎ 𝙵𝙴𝙲𝙷𝙰: ${date}
┣⟣☯︎ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┣⟣☯︎ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ𝕊 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝕆ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ ඬ⃟ 🌐 > *<funcion>*
┣⟣❥ ඬ⃟ 🌐 => *<funcion>*
┣⟣❥ ඬ⃟ 🌐 _$ *<funcion>*
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}setprefix *<prefijo>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}desactivarwa *<numero>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}resetprefix_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}autoadmin_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}chetar_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}leavegc_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}cajafuerte_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}blocklist_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}block *<@tag / numero>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}unblock *<@tag / numero>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *restrict*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *restrict*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *autoread*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *autoread*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *public*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *public*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *pconly*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *pconly*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *gconly*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *gconly*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *anticall*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *anticall*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *antiprivado*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *antiprivado*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *modejadibot*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *modejadibot*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *audios_bot*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *audios_bot*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}enable *antispam*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}disable *antispam*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}msg *<texto>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}banchat_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}unbanchat_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}resetuser *<@tag>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}banuser *<@tag>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}unbanuser *<@tag>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}banuser *<@tag>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bc *<texto>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bcchats *<texto>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bcgc *<texto>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bcgc2 *<audio>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bcgc2 *<video>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bcgc2 *<imagen>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}bcbot *<texto>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}cleartpm_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}restart_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}update_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}banlist_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}addprem *<@tag> <tiempo>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}delprem *<@tag>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}listcmd_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}setppbot *<responder a imagen>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}saveimage
┣⟣❥ ඬ⃟ 🌐 _${usedPrefix}viewimage
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menuowner|ownermenu|menupropietario)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
