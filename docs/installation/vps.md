---
title: Hosting on a VPS
prev: /installation/logs.md
---

# Hosting your Bot using a VPS

Hosting your ModMail with a VPS is the best option for stability and performance reasons.

- Access your VPS.
- [Install NodeJS](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu) if you do not have it.
- Install Git if you do not have it.

![](/images/VPS_Git.png)
> Image from [LowEndBox](https://lowendbox.com/blog/setting-up-git-for-free-on-a-vps/)

- Go to the directory you would like to install your ModMail.
- Clone your repo with the URL you [copied from GitHub](/installation/github.md) when you forked the main one.
```bash
git clone <your URL>
cd ModMail
```
- Install the dependencies and PM2.
```bash
npm install
npm install -g pm2
```
- Create a file named `.env` and copy the content from the `.env.template` file and fill the variables.
    - BOT_TOKEN: your Discord Bot Token. You can fin it in the Bot Tab of the [Discord's Developer Portal](https://discord.com/developers/applications).
    - MAIN_GUILD_ID: the ID of the server where the treads will be opened. If you do not know how to get an ID, check [this guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).
    - MONGO_URI: the mongo URL you copied with the password replaced.
    - LOGS_URL: the URL where your logs will be hosted (make sure it ends in `/`). If you are not using any logs, just delete the line.

```env
BOT_TOKEN=
MAIN_GUILD_ID=
MONGO_URI=
LOGS_URL=
```
- Start the bot with the following commands.
```bash
npm run build
pm2 start prod/index.js --name modmail
```

<br/>

:::tip Success
Your bot should already be online.
:::