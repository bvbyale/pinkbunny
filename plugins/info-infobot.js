import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠༄[🖥️] *𝑶𝑾𝑵𝑬𝑹:* 𝙷𝙰𝙲𝙷𝙴 𝙹𝙾𝚃𝙰
╠༄[☎️] *𝑵𝑼𝑴𝑬𝑹𝑶:* +51 918 299 647
╠༄[🔌] *𝑷𝑹𝑬𝑭𝑰𝑱𝑶:* ${usedPrefix}
╠༄[⚖️] *𝑷𝑹𝑰𝑽𝑨𝑫𝑶𝑺 𝑪𝑯𝑨𝑻𝑺:* ${chats.length - groups.length}
╠༄[👥] *𝑮𝑹𝑼𝑷𝑶𝑺 𝑪𝑯𝑨𝑻𝑺:* ${groups.length}
╠༄[☃️] *𝑻𝑶𝑻𝑨𝑳 𝑪𝑯𝑨𝑻𝑺:* ${chats.length} 
╠༄[🛰️] *𝑨𝑪𝑻𝑰𝑽𝑰𝑫𝑨𝑫:* ${uptime}
╠༄[🎭] *𝑼𝑺𝑼𝑨𝑹𝑰𝑶𝑺:* ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜
╠༄[🔮] *𝑨𝑼𝑻𝑶𝑹𝑬𝑨𝑫:* ${autoread ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠༄[🛡️] *𝑹𝑬𝑺𝑻𝑹𝑰𝑪𝑻:* ${restrict ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"} 
╠༄[💬] *𝑷𝑪𝑶𝑵𝑳𝒀:* ${pconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠༄[🏢] *𝑮𝑪𝑶𝑵𝑳𝒀:* ${gconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠༄[🌎] *𝑴𝑶𝑫𝑶:* ${self ? "*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*" : "*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*"}
╠༄[💬] *𝑨𝑵𝑻𝑰𝑷𝑹𝑰𝑽𝑨𝑫𝑶:* ${antiprivado ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠༄[🤖] *𝑴𝑶𝑫𝑬𝑱𝑨𝑫𝑰𝑩𝑶𝑻:* ${modejadibot ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠༄[📵] *𝑨𝑵𝑻𝑰𝑳𝑳𝑨𝑴𝑨𝑫𝑨:* ${antiCall ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠༄[📡] *𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫:* 
╠  *${speed} ms* 
╠═〘𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳〙 ═
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/HACHEJOTA/Hachiko-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「  𝐇𝐚𝐜𝐡𝐢𝐤𝐨-𝐁𝐨𝐭-𝐌𝐃 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/HACHEJOTA/Hachiko-Bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://github.com/HACHEJOTA/Hachiko-Bot-MD",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
