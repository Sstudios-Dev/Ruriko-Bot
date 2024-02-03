/* eslint-disable no-unused-vars */
const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { eng, ind } = require('./message/text/lang/')
const { loader } = require('./function')
const { version, bugs } = require('./package.json')
const { ownerBot } = require('./config.json')
const { groupLimit, memberLimit } = require('./database/bot/setting.json')
const msgHandler = require('./message/index.js')
const figlet = require('figlet')
const fs = require('fs-extra')
const cron = require('node-cron')
const exec = require('await-exec')

const start = (ruriko = new Client()) => {
    console.log(color(figlet.textSync('BocchiBot', 'Larry 3D'), 'cyan'))
    console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(loader.getAllDirFiles('./database').length), color('Library:', 'yellow'), color(loader.getAllDirFiles('./lib').length), color('Function:', 'yellow'), color(loader.getAllDirFiles('./function').length))
    console.log(color('=> Source code version:', 'yellow'), color(version))
    console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color(bugs.url))
    console.log(color('[ruriko]'), color('rurikoBot is now online!', 'yellow'))

    if (!fs.existsSync('./temp')) {
        console.log(color('=> Temp folder not found! Creating temp folder...', 'yellow'))
        fs.mkdirSync('./temp/audio', { recursive: true })
        fs.mkdirSync('./temp/video', { recursive: true })
        console.log(color('=> Temp folder successfully created!', 'yellow'))
    }

    // Uncomment code below to activate auto-update file changes.
    // loader.nocache('../message/index.js', (m) => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))

    ruriko.onStateChanged(async (state) => {
        console.log(color('[Ruriko-Bot]'), color(state, 'yellow'))
        if (state === 'OPENING') {
            await ruriko.refresh()
                .catch((err) => {
                    console.log(color('[ERROR]', 'red'), color(err, 'yellow'))
                    console.log(color('[Ruriko-Bot]'), color('Initiating force restart...', 'yellow'))
                    exec('pm2 restart all')
                })
        }
        if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') await ruriko.forceRefocus()
    })

    ruriko.onAddedToGroup(async (chat) => {
        const gc = await ruriko.getAllGroups()
        console.log(color('[Ruriko-Bot]'), 'Added to a new group. Name:', color(chat.contact.name, 'yellow'), 'Total members:', color(chat.groupMetadata.participants.length, 'yellow'))
        if (chat.groupMetadata.participants.includes(ownerBot)) {
            await ruriko.sendText(chat.id, eng.addedGroup(chat))
        } else if (gc.length > groupLimit) {
            await ruriko.sendText(chat.id, `Max groups reached!\n\nCurrent status: ${gc.length}/${groupLimit}`)
            await ruriko.clearChat(chat.id)
            await ruriko.leaveGroup(chat.id)
        } else if (chat.groupMetadata.participants.length < memberLimit) {
            await ruriko.sendText(chat.id, `Need at least ${memberLimit} members in group!`)
            await ruriko.clearChat(chat.id)
            await ruriko.leaveGroup(chat.id)
        } else {
            await ruriko.sendText(chat.id, eng.addedGroup(chat))
        }
    })

    ruriko.onMessage((message) => {
        // Comment code below to activate auto-update. Then, uncomment require code below msgHandler.
        msgHandler(ruriko, message)
        // require('./message/index.js')(ruriko, message)
    })

    ruriko.onIncomingCall(async (callData) => {
        await ruriko.sendText(callData.peerJid, eng.blocked(ownerBot))
        await ruriko.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked.`, 'yellow'))
    })

    // Clear chats every 12 hour
    cron.schedule('0 */12 * * *', async () => {
        const allChats = await ruriko.getAllChats()
        for (let chats of allChats) {
            if (chats.isGroup === true) {
                console.log(color('[ruriko]'), color('Clearing chats...', 'yellow'))
                await ruriko.clearChat(chats.id)
            } else {
                await ruriko.deleteChat(chats.id)
            }
        }
        console.log(color('[ruriko]'), color('Success cleared all chats!', 'yellow'))
    })

    ruriko.onGlobalParticipantsChanged(async (event) => {
        const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = _welcome.includes(event.chat)
        const gcChat = await ruriko.getChatById(event.chat)
        const pcChat = await ruriko.getContact(event.who)
        let { pushname, verifiedName, formattedName } = pcChat
        pushname = pushname || verifiedName || formattedName
        const { groupMetadata } = gcChat
        const botNumbers = await ruriko.getHostNumber() + '@c.us'
        try {
            if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                await ruriko.sendText(event.chat, `Welcome, ${pushname}! You are the *${groupMetadata.participants.length}* member.`)
            } else if (event.action === 'remove' && event.who !== botNumbers && isWelcome) {
                await ruriko.sendText(event.chat, `Bye, ${pushname}. We will miss you. :(`)
            }
        } catch (err) {
            console.error(err)
        }
    })
}

create(options(start))
    .then((ruriko) => start(ruriko))
    .catch((err) => console.error(err))
