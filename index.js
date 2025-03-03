const { Telegraf } = require('telegraf');

// Укажите токен вашего бота
const bot = new Telegraf('7784346965:AAFiYmCzBv1CdeBlO4m34UdUSW3BMRpHK2I');

// URL вашей Web App (замените на свой адрес)
const WEB_APP_URL = 'https://inrise-fazhkeg8r-alexcoles-projects-70f15eae.vercel.app';
// https://telegram-webapp-inrise-gicwnj9gx-alexcoles-projects-70f15eae.vercel.app/

bot.start((ctx) => {
  ctx.reply('Добро пожаловать! Нажмите кнопку, чтобы открыть Web App.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть Web App',
            web_app: { url: 'https://inrise-three.vercel.app' },
          },
        ],
      ],
    },
  });
});

// Запуск бота
bot.launch();

console.log('Бот запущен!');
