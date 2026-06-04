import { Telegraf } from "telegraf";
import chalk from "chalk";
import { WELCOME } from "./constants";
import { resolve } from "node:dns";
import { registerHandlers } from "./handlers";

export async function runTelegramMode() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const ownerId = process.env.TELEGRAM_OWNER_ID;

  if (!token) {
    console.error(chalk.red("Error: TELEGRAM_BOT_TOKEN environment variable is not set"));
    process.exit(1);
  }

  if (!ownerId) {
    console.warn(chalk.yellow("Warning: TELEGRAM_OWNER_ID environment variable is not set. Welcome message will not be sent."));
  }

  const bot = new Telegraf(token);
  registerHandlers(bot)

  // Wrap error handler to prevent readonly property issues
  bot.catch((err) => {
    console.error(chalk.red("Bot error:"), err instanceof Error ? err.message : err);
  });

  if (ownerId) {
    try {
      await bot.telegram.sendMessage(ownerId, WELCOME, { parse_mode: "Markdown" });
      console.log(chalk.green("Sent welcome message to Telegram.\n"));
    } catch (error) {
      console.warn(chalk.yellow("Could not send welcome message, but bot will still work"));
    }
  }

  try {
    bot.launch();
    console.log(chalk.green("Telegram bot is running. Press Ctrl+C to stop.\n"));
  } catch (error) {
    console.error(chalk.red("Failed to launch bot:"), error instanceof Error ? error.message : error);
    process.exit(1);
  }

  await new Promise<void>((resolve) => {
    const stop = () => {
      bot.stop("SIGINT");
      resolve();
    };
    process.once("SIGINT", stop);
    process.once("SIGTERM", stop);
  });
}