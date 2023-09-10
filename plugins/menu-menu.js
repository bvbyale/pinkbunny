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
    𝄂◉— *🅗🅐🅒🅗🅘🅚🅞-🅑🅞🅣* —◉
    𝄂≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡𝄂
𝄂 ✈︎ 𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
𝄂 ✈︎ 𝙽𝚄𝙼𝙴𝚁𝙾:* +51 992 004 117
𝄂 ✈︎ 𝙵𝙴𝙲𝙷𝙰:* ${date}
𝄂 ✈︎ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:* ${uptime}
𝄂 ✈︎ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂:* ${rtotalreg}
╰═══╡☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎☢︎︎╞═══╯

︻︻︻︻︻︻︻︻︻︻︻︻︻
𝄂 *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
𝄂≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
⫺ *🧸 𝙽𝙸𝚅𝙴𝙻:* ${level}
⫺ *🧰 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:* ${exp}
⫺ *🌟 𝚁𝙰𝙽𝙶𝙾:* ${role}
⫺ *💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${limit}
⫺ *👾 𝙷𝙰𝙲𝙷𝙸𝙺𝙾𝙲𝙾𝙸𝙽𝚂:* ${money}
⫺ *🪙 𝚃𝙾𝙺𝙴𝙽𝚂:* ${joincount}
⫺ *🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙽:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
︼︼︼︼︼︼︼︼︼︼︼︼︼
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕆𝕃𝕌ℂ𝕀𝕆ℕ 𝔸 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣➤ Mensajes en espera
┣ ඬ⃟ ⭐ _${usedPrefix}fixmsgespera_
┣➤ Mensajes en espera (owner)
┣ ඬ⃟ ⭐ _${usedPrefix}dsowner_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 𝕄𝔻 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 _${usedPrefix}terminosycondiciones_
┣ ඬ⃟ 💟 _${usedPrefix}grupos_
┣ ඬ⃟ 💟 _${usedPrefix}estado_
┣ ඬ⃟ 💟 _${usedPrefix}infobot_
┣ ඬ⃟ 💟 _${usedPrefix}speedtest_
┣ ඬ⃟ 💟 _${usedPrefix}donar_
┣ ඬ⃟ 💟 _${usedPrefix}owner_
┣ ඬ⃟ 💟 _${usedPrefix}script_
┣ ඬ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔱 _${usedPrefix}join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💻 _${usedPrefix}serbot_
┣ ඬ⃟ 💻 _${usedPrefix}stop_
┣ ඬ⃟ 💻 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛ 

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🏰 _${usedPrefix}menujuegos_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔮 _${usedPrefix}enable *welcome*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *welcome*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antilink*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antilink*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *detect*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *detect*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *audios*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *audios*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *modoadmin*_
┣ ඬ⃟ 🔮 _${usedPrefix}enable *antidelete*_
┣ ඬ⃟ 🔮 _${usedPrefix}disable *antidelete*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 𝔻𝔼𝕃 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛑 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔻𝔼 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🚀 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}twitter *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}fb *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}ytshort *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}videodoc *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}dapk2 *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 🚀 _${usedPrefix}play *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}play2 *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}play.1 *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}play.2 *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}playdoc2 *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}ringtone *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}soundcloud *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}pinterest *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟ 🚀 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 🚀 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ඬ⃟ 🚀 _${usedPrefix}igstory *<nombre de usuario>*_
┣ ඬ⃟ 🚀 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _${usedPrefix}githubsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}pelisplus *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}modapk *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔻𝔼 𝔾ℝ𝕌ℙ𝕆𝕊 𝔸𝕁𝕌𝕊𝕋𝔼𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👥 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 👥 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟ 👥 _${usedPrefix}kick2 *<@tag>*_
┣ ඬ⃟ 👥 _${usedPrefix}listanum *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}kicknum *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 👥 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 👥 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟ 👥 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 👥 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 👥 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 👥 _${usedPrefix}infogroup_
┣ ඬ⃟ 👥 _${usedPrefix}resetlink_
┣ ඬ⃟ 👥 _${usedPrefix}link_
┣ ඬ⃟ 👥 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}invocar *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟ 👥 _${usedPrefix}hidetag *<audio>*_
┣ ඬ⃟ 👥 _${usedPrefix}hidetag *<video>*_
┣ ඬ⃟ 👥 _${usedPrefix}hidetag *<imagen>*_
┣ ඬ⃟ 👥 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 👥 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 👥 _${usedPrefix}listwarn_
┣ ඬ⃟ 👥 _${usedPrefix}fantasmas_
┣ ඬ⃟ 👥 _${usedPrefix}destraba_
┣ ඬ⃟ 👥 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧿 _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ 🧿 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧿 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧿 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧿 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧿 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧿 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧿 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧿 _${usedPrefix}tts *<idioma> <texto>*_
┣ ඬ⃟ 🧿 _${usedPrefix}tts *<efecto> <texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🌠 _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🌠 _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🌠 _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🌠 _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🌠 _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🌠 _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🌠 _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🌠 _${usedPrefix}itssostupid_
┣ ඬ⃟ 🌠 _${usedPrefix}pixelar_
┣ ඬ⃟ 🌠 _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┣ ඬ⃟ 🥀 _${usedPrefix}consejo_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻-𝔸ℕ𝕀𝕄𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧿 _${usedPrefix}menuanimes_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛸 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 🛸 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 🛸 _${usedPrefix}messi_
┣ ඬ⃟ 🛸 _${usedPrefix}cat_
┣ ඬ⃟ 🛸 _${usedPrefix}dog_
┣ ඬ⃟ 🛸 _${usedPrefix}meme_
┣ ඬ⃟ 🛸 _${usedPrefix}itzy_
┣ ඬ⃟ 🛸 _${usedPrefix}blackpink_
┣ ඬ⃟ 🛸 _${usedPrefix}navidad_
┣ ඬ⃟ 🛸 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 🛸 _${usedPrefix}pubg_
┣ ඬ⃟ 🛸 _${usedPrefix}wpgaming_
┣ ඬ⃟ 🛸 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 🛸 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 🛸 _${usedPrefix}wprandom_
┣ ඬ⃟ 🛸 _${usedPrefix}wallhp_
┣ ඬ⃟ 🛸 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 🛸 _${usedPrefix}wpmoto_
┣ ඬ⃟ 🛸 _${usedPrefix}coffee_
┣ ඬ⃟ 🛸 _${usedPrefix}pentol_
┣ ඬ⃟ 🛸 _${usedPrefix}caricatura_
┣ ඬ⃟ 🛸 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 🛸 _${usedPrefix}technology_
┣ ඬ⃟ 🛸 _${usedPrefix}doraemon_
┣ ඬ⃟ 🛸 _${usedPrefix}hacker_
┣ ඬ⃟ 🛸 _${usedPrefix}planeta_
┣ ඬ⃟ 🛸 _${usedPrefix}randomprofile_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ‼️ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠 ℂ𝕠𝕟𝕥𝕖𝕟𝕚𝕕𝕠 ℍ‼️ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔞 _${usedPrefix}labiblia_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}bass_
┣ ඬ⃟ 🎤 _${usedPrefix}blown_
┣ ඬ⃟ 🎤 _${usedPrefix}deep_
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👁️‍🗨️ _${usedPrefix}start_
┣ ඬ⃟ 👁️‍🗨️ _${usedPrefix}next_
┣ ඬ⃟ 👁️‍🗨️ _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _${usedPrefix}menuaudios_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝔻𝔼 ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}chatgpt *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ _${usedPrefix}gptvoz *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}dall-e *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}hd *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}covid *<pais>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┣ ඬ⃟ 🛠️ _${usedPrefix}dropmail_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💸 _${usedPrefix}adventure_
┣ ඬ⃟ 💸 _${usedPrefix}cazar_
┣ ඬ⃟ 💸 _${usedPrefix}cofre_
┣ ඬ⃟ 💸 _${usedPrefix}balance_
┣ ඬ⃟ 💸 _${usedPrefix}claim_
┣ ඬ⃟ 💸 _${usedPrefix}heal_
┣ ඬ⃟ 💸 _${usedPrefix}lb_
┣ ඬ⃟ 💸 _${usedPrefix}levelup_
┣ ඬ⃟ 💸 _${usedPrefix}myns_
┣ ඬ⃟ 💸 _${usedPrefix}perfil_
┣ ඬ⃟ 💸 _${usedPrefix}work_
┣ ඬ⃟ 💸 _${usedPrefix}minar_
┣ ඬ⃟ 💸 _${usedPrefix}minar2_
┣ ඬ⃟ 💸 _${usedPrefix}buy_
┣ ඬ⃟ 💸 _${usedPrefix}buyall_
┣ ඬ⃟ 💸 _${usedPrefix}verificar_
┣ ඬ⃟ 💸 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💸 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💸 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℙ𝔸ℕ𝔼𝕃 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎈 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 🎈 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 🎈 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣ ඬ⃟ 🎈 _${usedPrefix}sticker2 *<enlace / link / url>*_
┣ ඬ⃟ 🎈 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 🎈 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 🎈 _${usedPrefix}s2 *<responder a imagen o video>*_
┣ ඬ⃟ 🎈 _${usedPrefix}s2 *<enlace / link / url>*_
┣ ඬ⃟ 🎈 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 🎈 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 🎈 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 🎈 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 🎈 _${usedPrefix}qc *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}attp3 *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}ttp2 *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}ttp3 *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}ttp4 *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}ttp5 *<texto>*_
┣ ඬ⃟ 🎈 _${usedPrefix}pat *<@tag>*_
┣ ඬ⃟ 🎈 _${usedPrefix}slap *<@tag>*_
┣ ඬ⃟ 🎈 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟ 🎈 _${usedPrefix}dado_
┣ ඬ⃟ 🎈 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 🎈 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 🎈 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┣ ඬ⃟ 🎈 _${usedPrefix}cartoon *<responder a imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ𝕊 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝕆ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🌐 _${usedPrefix}menuowner_
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
