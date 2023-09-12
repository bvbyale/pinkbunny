

import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let { exp, diamond, level, role, money } = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./storage/menus/Menu3.jpg'), thumbnail: fs.readFileSync('./storage/menus/Menu3.jpg'),sendEphemeral: true}}}
let links = linkSity.getRandom()
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hola ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(pp)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    
    const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net' 
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: 'Menú...' + '\n🚀 Cargando ^ω^', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(pp)).buffer(), 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    await conn.reply(m.chat, '*Enviando el menu . . .*', ftrol) 
m.react('🚀')     
let menu = `prueba,`
'use strict';
/**
 * @return {?}
 */
function _0x2daf() {
  const _0x4c1076 = ["namedoc", "social", "1017dFLzIP", "11680bWFOeX", "sendMessage", "1FnTozH", "6qNtNxK", "445374chjKag", "2096504ySppGm", "627669MaFyqj", "readFileSync", "En breve se enviar\u00e1 el men\u00fa...", "374160lMCurS", "356228pujvOS", "./Menu2.jpg", "1019845zOpQQK", "pdf", "chat"];
  /**
   * @return {?}
   */
  _0x2daf = function() {
    return _0x4c1076;
  };
  return _0x2daf();
}
const _0x110137 = _0x13bb;
(function(saveNotifs, y) {
  const tab = {
    _0x2e964c : 432,
    _0x4fc539 : 445,
    _0x2a1845 : 433,
    _0x2b6724 : 435,
    _0x4293cc : 440,
    _0x59080a : 441
  };
  const getControllerByTabId = _0x13bb;
  const keymod = saveNotifs();
  for (; !![];) {
    try {
      const swipingDirection = parseInt(getControllerByTabId(443)) / 1 * (parseInt(getControllerByTabId(tab._0x2e964c)) / 2) + parseInt(getControllerByTabId(tab._0x4fc539)) / 3 + parseInt(getControllerByTabId(tab._0x2a1845)) / 4 + parseInt(getControllerByTabId(tab._0x2b6724)) / 5 * (parseInt(getControllerByTabId(444)) / 6) + -parseInt(getControllerByTabId(429)) / 7 + -parseInt(getControllerByTabId(446)) / 8 + parseInt(getControllerByTabId(tab._0x4293cc)) / 9 * (-parseInt(getControllerByTabId(tab._0x59080a)) / 
      10);
      if (swipingDirection === y) {
        break;
      } else {
        keymod["push"](keymod["shift"]());
      }
    } catch (_0x1caf7d) {
      keymod["push"](keymod["shift"]());
    }
  }
})(_0x2daf, 144850);
/**
 * @param {number} isBgroundImg
 * @param {?} stgs
 * @return {?}
 */
function _0x13bb(isBgroundImg, stgs) {
  const structuredTypes = _0x2daf();
  return _0x13bb = function(newTypeName, stgs) {
    /** @type {number} */
    newTypeName = newTypeName - 429;
    let _0x1a2b8a = structuredTypes[newTypeName];
    return _0x1a2b8a;
  }, _0x13bb(isBgroundImg, stgs);
}
;
let buttonMessage = {
    'document': {
        'url': md,
    },
    'mimetype': td,
    'fileName': 'D A S H B O A R D',
    'fileLength': '99999999999999',
    'pageCount': '999',
    'contextInfo': {
    'externalAdReply': {
    'showAdAttribution': !![],
            'mediaType': 0x1,
            'previewType': "PHOTO",
            'title': 'Hola!!',
            'thumbnail': fs.readFileSync('./storage/menus/Menu1.jpg'),
            'renderLargerThumbnail': !![],
            'sourceUrl': md
        }
    },
  'caption': menu['trim']()
}
await conn[_0x110137(0x1ba)](m[_0x110137(0x1b5)], buttonMessage, { 'quoted': fkontak })
} catch {
conn.reply(m.chat, '*⚠️ EL MENU TIENE UN ERROR PRUEBE CON EL MENU COMPLETO: (.menucompleto)*', fpoll, m)
}}
handler.tags = ['main']
handler.command = /^(m1)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function ucapan() {
    const time = moment.tz('America/Los_Angeled').format('HH')
    let res = "Buenas noches 🌙"
    if (time >= 4) {
        res = "Buen día 🌄"
    }
    if (time > 10) {
        res = "Buenas tardes ☀️"
    }
    if (time >= 15) {
        res = "Buenas tardes 🌅"
    }
    if (time >= 18) {
        res = "Buenas noches 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
