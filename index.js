const {
    Telegraf,
    Markup
} = require('telegraf')
require('dotenv').config()
const my_const = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))



// Запустить бота
bot.launch()

// Включить плавную остановку
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))