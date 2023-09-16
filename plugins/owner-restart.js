import {spawn} from 'child_process';
const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
  if (conn.user.jid == conn.user.jid) {
    // conn.readMessages([m.key])
    await m.reply('🔄 𝑹𝒆𝒚𝒏𝒊𝒄𝒊𝒂𝒏𝒅𝒐 𝒂 𝑯𝒂𝒄𝒉𝒊𝒌𝒐-𝑩𝒐𝒕-𝑴𝑫...\n 𝑬𝒔𝒑𝒆𝒓𝒆 𝒖𝒏 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓');
    process.send('reset');
  } else throw 'eh';
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;
export default handler;
