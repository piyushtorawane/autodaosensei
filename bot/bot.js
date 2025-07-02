// 1. Load environment and libraries
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { ethers } = require('ethers');

// 2. Load values from .env
const token = process.env.BOT_TOKEN;
const contractAddress = process.env.CONTRACT_ADDRESS;

// 3. Setup Hardhat local provider + contract ABI
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const abi = [
    "function createProposal(string memory description) public",
    "function vote(uint256 proposalId) public",
    "function getAllProposals() public view returns (tuple(string description, uint voteCount)[])"
];
const signer = provider.getSigner(0); // Use first Hardhat account
const contract = new ethers.Contract(contractAddress, abi, signer);

// 4. Initialize the bot — 🔥 this line must come BEFORE using bot.onText
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 AutoDAO Bot is now running and polling Telegram...");

// 5. Now add all your bot commands
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋 Welcome to AutoDAO Sensei! Use /propose, /proposals, /vote <id>");
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "🧠 Commands:\n/start - Welcome\n/propose <idea> - Submit proposal\n/proposals - View proposals\n/vote <id> - Vote"
    );
});