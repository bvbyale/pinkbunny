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
    const str = `╭═══〘 ☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎ 〙══╮
║ ◉— *🅗🅐🅒🅗🅘🅚🅞-🅑🅞🅣* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║✈︎ *𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
║✈︎ *𝙽𝚄𝙼𝙴𝚁𝙾* +51 992 004 117
║✈︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
║✈︎ *𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:* ${uptime}
║✈︎ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂:* ${rtotalreg}
╰═══╡☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 *🏁 𝙽𝙸𝚅𝙴𝙻:* ${level}
⟣𒈮 *🛠️ 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:* ${exp}
⟣𒈮 *🌟 𝚁𝙰𝙽𝙶𝙾:* ${role}
⟣𒈮 *💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${limit}
⟣𒈮 *💲 𝙷𝙰𝙲𝙷𝙸𝙺𝙾𝙲𝙾𝙸𝙽𝚂:* ${money}
⟣𒈮 *🛡️ 𝚃𝙾𝙺𝙴𝙽𝚂:* ${joincount}
⟣𒈮 *🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙽:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕆𝕃𝕌ℂ𝕀𝕆ℕ 𝔸 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 Mensajes en espera
⟣𒈮 ඬ⃟ ⭐ _${usedPrefix}fixmsgespera_
⟣𒈮 Mensajes en espera (owner)
⟣𒈮 ඬ⃟ ⭐ _${usedPrefix}dsowner_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋  />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}terminosycondiciones_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}grupos_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}estado_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}infobot_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}speedtest_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}donar_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}owner_
⟣𒈮 ඬ⃟ 💟 _${usedPrefix}script_
⟣𒈮 ඬ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🔱 _${usedPrefix}join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 💻 _${usedPrefix}serbot_
⟣𒈮 ඬ⃟ 💻 _${usedPrefix}stop_
⟣𒈮 ඬ⃟ 💻 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛ 

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🏰 _${usedPrefix}menujuegos_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *welcome*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *welcome*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *modohorny*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *modohorny*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antilink*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antilink*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antilink2*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antilink2*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *detect*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *detect*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *audios*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *audios*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *autosticker*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *autosticker*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antiviewonce*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antiviewonce*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antitoxic*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antitoxic*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antitraba*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antitraba*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antiarabes*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antiarabes*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *modoadmin*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *modoadmin*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}enable *antidelete*_
⟣𒈮 ඬ⃟ 🔮 _${usedPrefix}disable *antidelete*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
⟣𒈮 *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 𝔻𝔼𝕃 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🛑 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}instagram *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}mediafire *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}gitclone *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}gdrive *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}tiktok *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}tiktokimg *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}xnxxdl *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}xvideosdl *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}twitter *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}fb *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}ytshort *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}ytmp3 *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}ytmp4 *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}videodoc *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}dapk2 *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}stickerpack *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}play *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}play2 *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}play.1 *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}play.2 *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}playdoc *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}playdoc2 *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}playlist *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}spotify *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}ringtone *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}soundcloud *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}imagen *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}pinterest *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}wallpaper *<texto>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}pptiktok *<nombre de usuario>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}igstalk *<nombre de usuario>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}igstory *<nombre de usuario>*_
⟣𒈮 ඬ⃟ 🚀 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}githubsearch *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}pelisplus *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}modapk *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}stickersearch *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}animeinfo *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
⟣𒈮 ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 𝔸𝕁𝕌𝕊𝕋𝔼𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}add *<numero>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}kick *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}kick2 *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}listanum *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}kicknum *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}grupo *<abrir / cerrar>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}grouptime *<opcion> <tiempo>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}promote *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}demote *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}demote *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}infogroup_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}resetlink_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}link_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}setname *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}setdesc *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}invocar *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}setwelcome *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}setbye *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}hidetag *<texto>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}hidetag *<audio>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}hidetag *<video>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}hidetag *<imagen>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}warn *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}unwarn *<@tag>*_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}listwarn_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}fantasmas_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}destraba_
⟣𒈮 ඬ⃟ 👥 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}toanime *<imagen>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}togifaud *<video>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}toimg *<sticker>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}tomp3 *<video>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}tomp3 *<nota de voz>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}toptt *<video / audio>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}tovideo *<sticker>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}tourl *<video / imagen / audio>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}tts *<idioma> <texto>*_
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}tts *<efecto> <texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}logos *<efecto> <texto>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}logochristmas *<texto>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}logocorazon *<texto>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}ytcomment *<texto>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}hornycard *<@tag>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}simpcard *<@tag>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}lolice *<@tag>*_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}itssostupid_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}pixelar_
⟣𒈮 ඬ⃟ 🌠 _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🥀 _${usedPrefix}piropo_
⟣𒈮 ඬ⃟ 🥀 _${usedPrefix}consejo_
⟣𒈮 ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
⟣𒈮 ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻-𝔸ℕ𝕀𝕄𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🧿 _${usedPrefix}menuanimes_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}kpop *<blackpink / exo / bts>*_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}cristianoronaldo_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}messi_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}cat_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}dog_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}meme_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}itzy_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}blackpink_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}navidad_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wpmontaña_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}pubg_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wpgaming_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wpaesthetic_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wpaesthetic2_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wprandom_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wallhp_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wpvehiculo_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}wpmoto_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}coffee_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}pentol_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}caricatura_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}ciberespacio_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}technology_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}doraemon_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}hacker_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}planeta_
⟣𒈮 ඬ⃟ 🛸 _${usedPrefix}randomprofile_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ‼️ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙8 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🔞 _${usedPrefix}labiblia_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<  𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}bass_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}blown_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}deep_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}earrape_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}fast_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}fat_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}nightcore_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}reverse_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}robot_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}slow_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}smooth_
⟣𒈮 ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 👁️‍🗨️ _${usedPrefix}start_
⟣𒈮 ඬ⃟ 👁️‍🗨️ _${usedPrefix}next_
⟣𒈮 ඬ⃟ 👁️‍🗨️ _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🔊 _${usedPrefix}menuaudios_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}chatgpt *<texto>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}gptvoz *<texto>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}dall-e *<texto>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}readviewonce *<imagen / video>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}hd *<responde a imagen>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}covid *<pais>*_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}horario_
⟣𒈮 ඬ⃟ 🛠️ _${usedPrefix}dropmail_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}adventure_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}cazar_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}cofre_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}balance_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}claim_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}heal_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}lb_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}levelup_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}myns_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}perfil_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}work_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}minar_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}minar2_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}buy_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}buyall_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}verificar_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}robar *<cantidad> <@tag>*_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
⟣𒈮 ඬ⃟ 💸 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}sticker *<responder a imagen o video>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}sticker *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}sticker2 *<responder a imagen o video>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}sticker2 *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}s *<responder a imagen o video>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}s *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}s2 *<responder a imagen o video>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}s2 *<enlace / link / url>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}scircle *<imagen>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}sremovebg *<imagen>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}semoji *<tipo> <emoji>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}qc *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}attp *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}attp2 *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}attp3 *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}ttp *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}ttp2 *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}ttp3 *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}ttp4 *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}ttp5 *<texto>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}pat *<@tag>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}slap *<@tag>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}kiss *<@tag>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}dado_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}wm *<packname> <author>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}stickermarker *<efecto> <imagen>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
⟣𒈮 ඬ⃟ 🎈 _${usedPrefix}cartoon *<responder a imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ𝕊 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝕆ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⟣𒈮 ඬ⃟ 🌐 _${usedPrefix}menuowner_
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
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
