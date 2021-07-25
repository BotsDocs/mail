---
title: Conversation Commands
prev: /commands/configuration.md
next: /commands/public.md
---

# Conversation Commands

Here you have all commands related to user-to-staff conversations, a.k.a. threads.

## +reply {content} <Badge text="Thread Only" vertical="middle" />

Sends a reply to a thread.

- **Usage example:**
<br/>
`+reply Do you need anything else?`

- **Permission:** SUPPORT
- **Alias:** `r`

## +areply {content} <Badge text="Thread Only" vertical="middle" />

Sends a reply to a thread without letting the recipient know who wrote the message.

- **Usage example:**
<br/>
`+areply Do you need anything else?`

- **Permission:** SUPPORT
- **Alias:** `anonreply`

## +close [scheduled time] [reason] <Badge text="Thread Only" vertical="middle" />

Closes a thread. If a scheduled time is provided, it is closed after the time has passed. If you provide a reason, it will override the default embed description.
<br/>
The format for the scheduled time is, for example, `3w` for three weeks, `1d` for one day, `10m` for ten minutes, etc.

- **Usage example:**
<br/>
`+close` - Regular and immediate closure.
<br/>
`+close 2h` - Regular closure after 2 hours.
<br/>
`+close See you soon` - Immediate closure with the specified message.
<br/>
`+close 2h See you soon` - Closure after 2 hours with the specified message.

- **Permission:** SUPPORT
- **Alias:** `c`

## +edit {messageID} {new content} <Badge text="Thread Only" vertical="middle" />

Edits a message sent by the bot. The provided ID must be the ID of the message sent by the bot (the one with the embed), and it must be a staff reply.

- **Usage example:**
<br/>
`+edit 12345678900987 Hey, this content is better :)`

- **Permission:** SUPPORT

## +delete {messageID} <Badge text="Thread Only" vertical="middle" />

Deletes a message sent by the bot. The provided ID must be the ID of the message sent by the bot (the one with the embed), and it must be a staff reply.

- **Usage example:**
<br/>
`+delete 12345678900987`

- **Permission:** SUPPORT

## +subscribe <Badge text="Thread Only" vertical="middle" />

Notifies you of every new recipient reply on the thread.

- **Usage example:**
<br/>
`+subscribe`

- **Permission:** SUPPORT

## +unsubscribe <Badge text="Thread Only" vertical="middle" />

Stops notifying you of every new recipient reply on the thread.

- **Usage example:**
<br/>
`+unsubscribe`

- **Permission:** SUPPORT

## +contact {user} <Badge text="Thread Only" vertical="middle" />

Creates a thread with the specified user.

- **Usage example:**
<br/>
`+contact 1234567890098`
<br/>
`+contact @Mail#7071`

- **Permission:** SUPPORT
- **Alias:** `open`

## +id <Badge text="Thread Only" vertical="middle" />

Sends the ID of the recipient.

- **Usage example:**
<br/>
`+id`

- **Permission:** SUPPORT

## +title {title / "removetitle" } <Badge text="Thread Only" vertical="middle" />

Sets a title for the thread, displayed on the logs.

- **Usage example:**
<br/>
`+title Important conversation` - Sets the title to **Important conversation**.
<br/>
`+title removetitle` - Deletes the title.

- **Permission:** SUPPORT

## +note {content / "removenote" } <Badge text="Thread Only" vertical="middle" />

Sets a note for the thread, displayed on the logs.

- **Usage example:**
<br/>
`+title This user is really kind :D` - Sets the note to **This user is really kind :D**.
<br/>
`+title removenote` - Deletes the note.

- **Permission:** SUPPORT

## +nsfw <Badge text="Thread Only" vertical="middle" />

Toggles a channel to NSFW or turns it off if it was enabled.

- **Usage example:**
<br/>
`+nsfw`

- **Permission:** SUPPORT

## +rename {name} <Badge text="Thread Only" vertical="middle" />

Changes the name of a thread.

- **Usage example:**
<br/>
`+rename Special-ticket`

- **Permission:** ADMIN

## +blacklist <add / remove> [user]

Changes the blacklist status of a member. If it is run <u>in a thread</u>, the recipient is blacklisted/unblacklisted. If not, you need to provide a user.

- **Usage example:**
<br/>
`+blacklist add` - In a thread, blacklists the recipient.
<br/>
`+blacklist remove 1231943214` - Outside a thread, removes the specified user from the blacklist.

- **Permission:** ADMIN
- **Alias:** `bl`

## +userlogs {userID}

Gets all previous logs of the specified user ID.

- **Usage example:**
<br/>
`+userlogs 123890090934334`

- **Permission:** SUPPORT
- **Alias:** `logs`