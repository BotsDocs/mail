---
title: Configuration Commands
prev: /commands/README.md
next: /commands/conversation.md
---

# Configuration Commands

Having a well configured ModMail is essential for a proper personalized usage. Here you have the different commands to configure permissions, texts, images, etc.

## +permission {levelName / commandName} <add / remove> {role ID / userID}

Sets a particular permission for a level or command to the specified role or user.
<br/>
The available level names are: **REGULAR**, **SUPPORT** and **ADMIN**.

If you use a level name, the specified user or role will be able to use all commands requiring that permission and below.
<br/>
However, you can also specify a command name, in order to only provide permissions to that specific command.

- **Usage example:**
<br/>
`+permission ADMIN add 1234567890` - Gives ADMIN (full) permissions to the ID (1234567890), being either a role or a user.
<br/>
`+permission reply remove 2323445662` - Removes permissions to use the reply command to the ID (2323445662), being either a role or a user. To do so, it should have been previously added.
  
    > If you want a permission to affect every member, you can use the server ID.

- **Permission:** ADMIN

## +set {key} {value}

Changes most of the bot's parameters. Below you have a table with all the available options for the **key** field.
<br/>
For the value, just send the appropriate text corresponding the description.

| key                         | description                                                                                                                                                                                                           |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| avatar                      | attach an image and it will change your bot's avatar.                                                                                                                                                                 |
| username                    | changes your bot **username**, not the nickname.                                                                                                                                                                      |
| prefix                      | changes your bot's prefix.                                                                                                                                                                                            |
| category                    | send the ID of the category where you want new threads to be opened.                                                                                                                                                  |
| logs                        | send the ID or mention the channel where you want your logs to be sent on thread closure. Use `none` to disable them.                                                                                                 |
| status                      | changes your bot status.                                                                                                                                                                                              |
| status_type                 | changes your bot type to: `playing`, `streaming`, `listening`, `watching`, `competing`. If you select streaming, provide a Twitch user or YouTube video/stream URL.                                                   |
| notification                | send the ID or mention the role you want to get pinged on thread creation. Use `none` if you do not want to ping any role.                                                                                            |
| account_age                 | the age an account needs to have in order to be able to open a thread. Use `0` to disable it. The format is, for example, `3w` for three weeks, `1d` for one day, `10m` for ten minutes, etc.                         |
| guild_age                   | the time an account needs to have been inside the server in order to be able to open a thread. Use `0` to disable it. The format is, for example, `3w` for three weeks, `1d` for one day, `10m` for ten minutes, etc. |
| guild_age_id                | the server ID where someone needs to have the required **guild_age**. If not configured, uses the server where threads are opened.                                                                                    |
| embed_creation_title        | the title of the embed sent to the user when the thread is opened.                                                                                                                                                    |
| embed_creation_thumbnail    | the thumbnail of the embed sent to the user when the thread is opened.                                                                                                                                                |
| embed_creation_description  | the description of the embed sent to the user when the thread is opened.                                                                                                                                              |
| embed_creation_color        | the color (hex code) of the embed sent to the user when the thread is opened.                                                                                                                                         |
| embed_creation_footer_text  | the footer of the embed sent to the user when the thread is opened.                                                                                                                                                   |
| embed_creation_footer_image | the footer image of the embed sent to the user when the thread is opened. Use `none` to disable it.                                                                                                                   |
| embed_contact_title         | the title of the embed sent to the user when the thread is created by a staff member.                                                                                                                                 |
| embed_contact_thumbnail     | the thumbnail of the embed sent to the user when the thread is created by a staff member.                                                                                                                             |
| embed_contact_description   | the description of the embed sent to the user when the thread is created by a staff member.                                                                                                                           |
| embed_contact_color         | the color (hex code) of the embed sent to the user when the thread is created by a staff member.                                                                                                                      |
| embed_contact_footer_text   | the footer of the embed sent to the user when the thread is created by a staff member.                                                                                                                                |
| embed_contact_footer_image  | the footer image of the embed sent to the user when the thread is created by a staff member. Use `none` to disable it.                                                                                                |
| embed_closure_title         | the title of the embed sent to the user when the thread is closed.                                                                                                                                                    |
| embed_closure_thumbnail     | the thumbnail of the embed sent to the user when the thread is closed.                                                                                                                                                |
| embed_closure_description   | the description of the embed sent to the user when the thread is closed.                                                                                                                                              |
| embed_closure_color         | the color (hex code) of the embed sent to the user when the thread is closed.                                                                                                                                         |
| embed_closure_footer_text   | the footer of the embed sent to the user when the thread is closed.                                                                                                                                                   |
| embed_closure_footer_image  | the footer image of the embed sent to the user when the thread is closed. Use `none` to disable it.                                                                                                                   |
| embed_staff_title           | the title of the embed sent to the staff when the thread is opened.                                                                                                                                                   |
| embed_staff_color           | the color (hex code) of the embed sent to the staff when the thread is opened.                                                                                                                                        |

- **Usage example:**
<br/>
`+set status DM to get help!` - Changes the bot status to **DM to get help!**.

- **Permission:** ADMIN
- **Alias:** `s`

## +alias <add / remove> {alias name} {command name}

Allows you to set up aliases for your commands, customizing how you trigger them.

- **Usage example:**
<br/>
`+alias add rep reply` - Makes the "command" **rep** an alias of the command **reply**, providing it with the same functionality.

- **Permission:** ADMIN
- **Alias:** `aliases`

## +snippet <create / edit> {name} {content}

Allows you to create or edit a snippet or predefined message you can use to reply in threads as if they were separate commands.<br/>
If the snippet name begins with `anon_` it will be sent as an anonymous reply when sent.

- **Usage example:**
<br/>
`+snippet create welcome Welcome to our support server, what can we help you with?` - Creates a snippet named **welcome**. Whenever you use the command `+welcome` the selected text will be automatically sent.

- **Permission:** ADMIN
- **Aliases:** `qr`, `quickreply`

## +snippet delete {name}

Deletes the specified snippet.

- **Usage example:**
<br/>
`+snippet delete welcome` - Deletes the **welcome** snippet.

- **Permission:** ADMIN
- **Aliases:** `qr`, `quickreply`

## +snippet list

Shows you all current available snippets.

- **Usage example:**
<br/>
`+snippet list`

- **Permission:** ADMIN
- **Aliases:** `qr`, `quickreply`

## +category add {name} {categoryID}

Adds a category to your server's category list. [See more info at the move command](/commands/conversation.md#move-category-name=).

- **Usage example:**
<br/>
`+category add main 12343545674788366`

- **Permission:** ADMIN

## +category remove {name}

Removes a category from your server's category list. [See more info at the move command](/commands/conversation.md#move-category-name=).

- **Usage example:**
<br/>
`+category remove main`

- **Permission:** ADMIN

## +category list

Shows your server's category list. [See more info at the move command](/commands/conversation.md#move-category-name=).

- **Usage example:**
<br/>
`+category list`

- **Permission:** ADMIN