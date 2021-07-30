---
title: FAQ
prev: /hosted_version.md
next: /installation/github.md
---

# Frequently Asked Questions

## How do I update my bot?

### In Heroku

Unless specified in a support server announcement, you do not need to do anything. Thanks to the pull app, you will always be up-to-date.

### In your VPS

You have to run the following commands when there is a new release.

```shell
git pull
npm run build
pm2 restart modmail
```

## I could not install the bot, what can I do?

Join our [support server](https://discord.gg/aUNhdFD) and leave your questions. We will help you to set up the bot.