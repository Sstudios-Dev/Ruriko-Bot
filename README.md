<div align="center">
  <img src="https://i.imgur.com/LfdlPxx.png" alt="BocchiBot" width="300" />

  # **RurikoBot**

> RurikoBot is a versatile WhatsApp bot powered by the wa-automate-nodejs library! using the base code of [BocchiBot](https://github.com/SlavyanDesu/BocchiBot)

<h3>Working on this version ❤️</h3>

  <a href="https://github.com/staFF6773"><img src="https://avatars.githubusercontent.com/u/108166164?v=4" height="128" width="128" /></a>
  <a href="https://github.com/Sstudiosdev"><img src="https://avatars.githubusercontent.com/u/149289426?v=4" height="128" width="128" /></a>


  <a href="https://github.com/SlavyanDesu"><img title="Author" src="https://img.shields.io/badge/Author-SlavyanDesu-purple.svg?style=for-the-badge&logo=github" /></a>
  <a href="https://github.com/Sstudios-Dev"><img title="version manager" src="https://img.shields.io/badge/version manager-SstudiosDev-blue.svg?style=for-the-badge&logo=github" /></a>

  <img src="https://img.shields.io/node/v/@open-wa/wa-automate"/>
  <img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green"/>

  <a href="https://github.com/Sstudios-Dev/Ruriko-Bot#installation">Installation</a> •
  <a href="https://sstudiosdev.github.io/">web page</a> •
  <a href="https://github.com/Sstudios-Dev/Ruriko-Bot#note">Note</a>
</div>

  # rquirements
* [Node.js](https://nodejs.org/en/) - a cross-platform runtime environment
* [Git](https://git-scm.com/downloads) - version control software
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/) - free software that can record, convert and stream audio and video
* [Tesseract](https://github.com/tesseract-ocr/tesseract) - This package contains an OCR engine

# Installation
## 📋 Clone the repository with the ``git`` tool
```cmd
> git clone https://github.com/Sstudios-Dev/Ruriko-Bot.git
```
this step is very important for the bot to work that's why you need `git` this step must not be skipped

## 💻 change the configuration file
after cloning the repository you will find a file called `config.example.json` 
you have to rename that file to `config.json` and remove the `.example` from it this is a very important step for the bot to work and not give errors

```json
{
    "ownerBot": "505xxxxxxxx@c.us",
    "prefix": "!",
    "nao": "SauceNAO-key",
    "openAiKey": "OpenAI-key",
    "authorStick": "@SstudiosDev",
    "packStick": "rurikoBot",
    "language": "Coming soon"
}
```

`ownerBot`: change the `505` to your country prefix and everything glued together [Here](https://en.wikipedia.org/wiki/List_of_country_calling_codes)

`prefix`: there you can change the bot prefix which defaults to `!`

`nao`: SauceNAO API key. Obtain it [here](https://saucenao.com/user.php) by creating an account.

`openAiKey`: OpenAI API key. Obtain it [here](https://platform.openai.com/account/api-keys) by creating an account.

`authorStick`: Title of the author sticker pack.

`packStick`: Title of the sticker pack.

## 🗣️ Language Modification
Replace all instances of `eng` with `es` for Spanish soon it will be possible to do that from the `cofig.example.json`


## 🛠️ FFmpeg Installation Guide

- Click here to download one of the available FFmpeg versions.
- Extract the downloaded file to the `C:\` directory
- Rename the extracted folder to `ffmpeg`.
- Open Command Prompt with Administrator privileges.
- Execute the following command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```

A confirmation message like `SUCCESS: specified value was saved` should appear.
- To ensure FFmpeg is successfully installed, check its version by running the following command:
```cmd
> tesseract -version
```

## 🚀 Installing Dependencies
```cmd
> npm install
```

## ▶️ Launching the Bot
For regular node execution:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js -i max
> pm2 monit
```

Following that, scan the `QR` code using your WhatsApp on your phone.

## 🌟 Features
Type `!menu` or `!help` on your bot number to view the list of available commands.

## Note
I would like to inform you that this code is not intended for sale. It is offered exclusively as an open source version with improved functionality and updates compared to the original version. The original version, including the bot's Terms of Service and copyright credits, have not been modified and are available for free [here](https://github.com/SlavyanDesu/BocchiBot). We appreciate your interest and encourage you to take advantage of the more complete and improved version that we offer for free.

# License
**BocchiBot** © [SlavyanDesu](https://github.com/SlavyanDesu), released under the MIT License.
Authored and maintained by SlavyanDesu.

<div align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=large" />
</div>
