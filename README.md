# CodeSage

CodeSage is an AI-powered coding assistant built with TypeScript and Bun. It helps developers explore, understand, plan, and modify codebases through an interactive CLI or Telegram bot interface.

## Features

- Interactive startup menu with CLI and Telegram modes
- Ask Mode for codebase questions and research
- Agent Mode for AI-assisted code changes
- Plan Mode for breaking goals into executable steps
- Approval flow before applying file changes
- File reading, searching, creation, and modification tools
- Telegram bot support for remote codebase interaction
- OpenRouter model integration

## Tech Stack

- TypeScript
- Bun
- Commander
- Clack Prompts
- AI SDK
- OpenRouter
- Telegraf
- Firecrawl
- Chalk
- Figlet

## Requirements

Make sure you have Bun installed.

```bash
bun --version
```

If Bun is not installed, install it from:
```bash
https://bun.sh
Installation
```
Clone the repository:
```bash
git clone https://github.com/your-username/codesage.git
cd codesage
```
Install dependencies:

bun install
Environment Variables
Create a .env file in the project root.

```bash
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_DEFAULT_MODEL=your_preferred_model

TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_OWNER_ID=your_telegram_user_id
OPENROUTER_API_KEY and OPENROUTER_DEFAULT_MODEL are required for AI features.
```
Telegram variables are only required if you want to use Telegram mode.

Usage
Start CodeSage:
```bash
bun run index.ts wakeup
```
You will see a startup menu where you can choose:
CLI
Telegram
Exit

#### CLI Modes
Ask Mode
Use this mode to ask questions about your codebase. CodeSage can inspect files, search the project, analyze structure, and answer based on the current workspace.

Agent Mode
Use this mode when you want CodeSage to perform coding tasks. The agent can read files, modify files, create files, and execute supported tools.

All changes are staged first and require approval before being applied.

Plan Mode
Use this mode to generate a step-by-step plan for a larger goal. You can select which steps to execute, then approve the resulting changes.

#### Telegram Mode
Telegram mode lets you interact with CodeSage from a Telegram bot.

Available commands:

/start
/ask <your question>
/agent <task description>
/plan <your goal>
/help
Only the configured TELEGRAM_OWNER_ID can use the bot.

## Project Structure

```bash
CodeSage/
├── ai/
│   └── AI model configuration
├── modes/
│   ├── agent/
│   ├── ask/
│   ├── plan/
│   ├── telegram/
│   └── cli.ts
├── tui/
│   └── Terminal UI helpers
├── index.ts
├── package.json
└── tsconfig.json
