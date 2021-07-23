---
title: Commands
prev: /installation/heroku.md
next: /commands/configuration.md
---

# Commands

Here you can find all the commands of the bot, but before reading over the rest of the pages, there are some things you need to know about the commands.

## Format

All commands here are going to be prefixed with a `+`, but remember that if you ever change your prefix, you will have to use the one you choose instead of the one shown here.

Moreover, you will see that some commands have parameters with different symbols. The ones surrounded by `{ }` are required ones, while the ones between `[ ]` are optional. In any of the cases, you must not include the symbols while running the commands.

If an argument has different options available, you will see all of them separated with a slash (`/`).
<br/>
Some commands parameters might also have an option which is meant to disable or delete a value. In these cases, you will find the slash (`/`) and some quotes (`" "`).
<br/>
For example, in the command:


```:no-line-numbers
+set logs {channel / "none"}
```

You can either mention a channel, send the channel ID or type `none` if you do not want logs to go to any channel.

And last but not least, some commands require you to indicate a channel or user, but not all of them accept mentions. Because of this, when you see `channel/user`, you can use both a <u>mention or an ID</u>. However, if you see `channelID/userID`, you can <u>only use the ID</u>.

## Permissions

All commands have a predefined level, which can be `ADMIN`, `SUPPORT` or `REGULAR`. If a command requires SUPPORT permissions, then only those roles and users with SUPPORT or ADMIN will be able to use the command.

You will see how to configure the permissions on the [configuration commands](/commands/configuration.md) section.