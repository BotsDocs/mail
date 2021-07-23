---
title: Hosting on Heroku
prev: /installation/vps.md
next: /commands/README.md
---

# Hosting your Bot using Heroku

Heroku is a cloud platform as a service that supports several programming languages and that allows you to host some of your projects.

<br/>

:::warning
Hosting your bot on Heroku does not ensure a 100% uptime.<br/>
If you do not have a credit card linked to your Heroku account, your bot will not be online every day.
:::

<br/>

- Create and account on [Heroku](https://www.heroku.com/) or log in if you already have one.
- Click on **New** and then on **Create new app**.

![](/images/Hk_New.png)

- Select a name for your app, the location that fits the best for you, and create the app.

![](/images/Hk_Create.png)

- Once in the dashboard, select **GitHub**.

![](/images/Hk_GitHub.png)

- Look for **ModMail** (your fork should appear) and click on **Connect**.

![](/images/Hk_Repo.png)

- Go to the **Settings** tab and look for the *Config Vars* section.

![](/images/Hk_ShowVars.png)

- Add the following variables with their corresponding values.
    - BOT_TOKEN: your Discord Bot Token. You can find it in the Bot Tab of the [Discord's Developer Portal](https://discord.com/developers/applications).
    - MAIN_GUILD_ID: the ID of the server where the treads will be opened. If you do not know how to get an ID, check [this guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).
    - MONGO_URI: the mongo URL you copied with the password replaced.
    - LOGS_URL: the URL where your logs will be hosted (make sure it ends in `/`). If you are not using any logs, just delete the line.

![](/images/Hk_ShowedVars.png)

- Go to the **Deploy** tab and click on *Enable Automatic Deploys*. When it loads, click on *Deploy Branch* and wait for it to finish.

![](/images/Hk_Deploys.png)

- Go to the **Resouces** tab. There disable the `web` dyno and enable the `worker` one.

![](/images/Hk_Worker.png)

- Get back to the **Deploy** tab and click on *Deploy Branch* again.

![](/images/Hk_Deploy.png)

<br/>

Once done, go to any channel on your server and run the command: `+setup`.

<br/>

:::tip You are Done!
Your bot is now hosted on Heroku and it should appear online in your server.
<br/>
Please, remember the site limitations mentioned previously.
:::