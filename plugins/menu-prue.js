import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/HACHEJOTA/Hachiko-Bot-MD');
   const json = await res.json();
   let txt = `┏━━━━━━━━━━━━━━━━━━┓
┃ *◉— 🅗🅐🅒🅗🅘🅚🅞-🅑🅞🅣 —◉*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣⟣☯︎ *𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
┣⟣☯︎ *𝙽𝚄𝙼𝙴𝚁𝙾:* +51 992 004 117
┣⟣☯︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
┣⟣☯︎ *𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:* ${uptime}
┣⟣☯︎ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂:* ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━┓
┃ *𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ *🏁 𝙽𝙸𝚅𝙴𝙻:* ${level}
┣⟣❥ *🛠️ 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:* ${exp}
┣⟣❥ *🌟 𝚁𝙰𝙽𝙶𝙾:* ${role}
┣⟣❥ *💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${limit}
┣⟣❥ *💰 𝙷𝙰𝙲𝙷𝙸𝙺𝙾𝙲𝙾𝙸𝙽𝚂:* ${money}
┣⟣❥ *🛡️ 𝚃𝙾𝙺𝙴𝙽𝚂:* ${joincount}
┣⟣❥ *🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙽:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}tyc_
┣⟣❥ _${usedPrefix}grupos_
┣⟣❥ _${usedPrefix}estado_
┣⟣❥ _${usedPrefix}infobot_
┣⟣❥ _${usedPrefix}speedtest_
┣⟣❥ _${usedPrefix}donar_
┣⟣❥ _${usedPrefix}owner_
┣⟣❥ _${usedPrefix}script_
┣⟣❥ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝕆𝕎ℕ𝔼ℝ𝕊 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝕆ℝ𝕊 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}menuowner_
┗━━━━━━━━━━━━━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};

handler.command = /^(m1|menu3)$/i;
export default handler;
