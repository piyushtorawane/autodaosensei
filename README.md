# 🧠 AutoDAO Sensei

**AutoDAO Sensei** is a decentralized governance bot that allows users to propose and vote on ideas using a Telegram interface — powered by Ethereum smart contracts.

> 🤖 No MetaMask. No frontend. Just smart contracts + Telegram magic.

🔨 Built for the **BlockDAG Hackathon 2024**

---

## 🔍 Overview

AutoDAO Sensei makes DAO governance **simple, accessible, and fully on-chain** — through Telegram.

- Anyone can propose ideas using `/propose`
- Community members can vote using `/vote <id>`
- Smart contracts ensure transparency
- Telegram makes it dead simple for users

---

## 📦 Tech Stack

| Layer         | Tech Used                         |
|---------------|------------------------------------|
| 💬 Bot        | Node.js + node-telegram-bot-api   |
| 🔗 Contracts  | Solidity + Hardhat + Ethers.js     |
| 🧪 Dev Tools  | Hardhat, dotenv, PowerShell        |
| 🔄 Backend    | Local Hardhat node or EVM testnet  |

---

## ⚙️ Features

- 📥 `/propose <idea>` — Submit a new proposal
- 🗳️ `/vote <id>` — Vote on a proposal
- 📋 `/proposals` — View all proposals
- 🧠 `/summary` — View top-voted ideas
- 🤖 `/start` and `/help` — Bot onboarding

---

## 🧪 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/piyushtorawane/autodaosensei.git
cd autodaosensei

#### 2. Start Blockchain Node (Hardhat)
bash
Copy
Edit
cd contracts
npm install
npx hardhat node
3. Deploy Smart Contract
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost
📌 Copy the deployed contract address from the terminal output.

4. Setup Telegram Bot
Create a bot at @BotFather

Get your BOT_TOKEN

In the /bot folder, create a .env file:

env
Copy
Edit
BOT_TOKEN=your_telegram_bot_token
CONTRACT_ADDRESS=your_deployed_contract_address
5. Start the Bot
bash
Copy
Edit
cd ../bot
npm install
node bot.js
🧠 Example Commands
bash
Copy
Edit
/start
/propose Build a treasury dashboard
/proposals
/vote 1
/summary
🤝 Team
Built with ❤️ by Piyush Torawane
Telegram Bot: @autodaosensei_bot

🔗 Links
GitHub: github.com/piyushtorawane/autodaosensei

⚡ “Governance made simple. Voting made unstoppable.”
