---
title: Hosting your Logs Viewer
prev: /installation/mongo.md
next: /installation/vps.md
---

# Hosting your Logs Viewer

The logs viewer allows you to render thread logs and display them with a nice dark theme.

- [Fork](https://github.com/ThePhoDit/ModMailLogs/fork) the Logs repository.
- Install [Pull](https://github.com/apps/pull) to your fork so that you can automatically download updates.
- Create a [Vercel account](https://vercel.com/) if you do not have one.
- Create a new project and connect your GitHub account. Then select the ModMailLogs repo.

![](/images/Lg_Import.png)

- Select your personal account.
- Click continue on the file selection window.
- In the Environmental Variables section add **MONGO_URI** as the name and the URL you copied before as the value.

![](/images/Lg_Env.png)

- Copy the URL of your logs (make sure it ends in `/`).

<br/>

:::tip Done!
Your logs viewer should now deploy automatically when there is an available update.
:::