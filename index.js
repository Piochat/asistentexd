const telebot = require('telebot');
const CONSTANTES = require('./constants');

const bot = new telebot(
    { token: CONSTANTES.TELEGRAM_TOKEN }
);

bot.on(["/start", "/hello"], (msg) => {
    bot.sendMessage(msg.chat.id, "Bueno ¿qué desea extraño viajero? \n/menu for see the options");
});

bot.on(["/menu"], (msq) => {
    bot.sendMessage(msq.chat.id, `/asistencia Para ver su asistencia
    /bye Bueno... A mimr`);
});

bot.on(["/bye"], (msg) => {
    //return msg.reply.sticker('./sticker/bueno.webp', { asReplay: true });
    bot.sendSticker(msg.chat.id, './sticker/bueno.webp');
    bot.sendSticker(msg.chat.id, './sticker/Amimir.webp');
});

bot.start();