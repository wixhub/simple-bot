import { Bot } from "grammy";
import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
  throw result.error
}

const bot = new Bot(result.parsed.TOKEN); // <-- put your bot token here (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi with dotenv!"));

bot.start();