---
title: Setting up the Database
prev: /installation/discord.md
next: /installation/logs.md
---

# Setting up the Database

The database is a really important part of your ModMail, as it saves your configuration and your logs. We will be using MongoDB, which offers a free hosting tier.

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account if you do not have one.

![](/images/Mg_Create.png)

- Give your project a name and select **JavaScript** as you preferred language.
- Select the **Shared Cluster** option (the free one).

![](/images/Mg_Plan.png)

- Select the region that fits the best for you and click on **Create Cluster**.

![](/images/Mg_Region.png)

- Enter a username and a password and note it down, **you will need them later**!
- Add the IP `0.0.0.0/0` to the IP Access List.

![](/images/Mg_Pass.png)

- Wait until your Cluster has been created.
- Click on **CONNECT** and select the **application** option.

![](/images/Mg_Connect.png)

- Copy the link and replace `<password>` with the password you created before. You also need to replace `myFirstDatabase?retryWrites=true&w=majority` with `ModMail`.
- Save the link in a secure place, you will need it later.