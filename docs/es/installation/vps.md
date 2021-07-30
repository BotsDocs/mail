---
title: Usando una VPS
prev: /es/installation/logs.md
next: /es/installation/heroku.md
---

# Usando una VPS

Alojar un Bot con una VPS es la mejor opción por razones de estabilidad y rendimiento.

- Accede a tu VPS.
- [Instala NODE.JS](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu) si aún no lo tienes.
- Instala Git si aún no lo tienes.

![](/images/VPS_Git.png)
> Imagen de [LowEndBox](https://lowendbox.com/blog/setting-up-git-for-free-on-a-vps/)

- Ve al directorio que quieras instalar en tu ModMail.
- Clona el repositorio que [copiaste de GitHub](/installation/github.md) como Fork principal.
```bash
git clone <tu URL>
cd ModMail
```
- Instala las dependencias y PM2.
```bash
npm install
npm install -g pm2
```
- Crea un archivo con el nombre `.env` y copia el contenido del archivo `.env.template` y completa las variables.
    - BOT_TOKEN: el token de tu Bot de Discord. Puedes encontrarlo en las pestaña de Bot de [Discord's Developer Portal](https://discord.com/developers/applications).
    - MAIN_GUILD_ID: la ID del servidor donde se abrirán los tickets. Si no sabes como encontrar una ID, revisa [esta guía](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).
    - MONGO_URI: la URL de mongo que copiaste con la contraseña reemplazada.
    - LOGS_URL: la URL donde se almacenarán tus registros (asegúrate que termine con `/`). Si no estás utilizando ningún registro, solo elimina esta línea.

```env
BOT_TOKEN=
MAIN_GUILD_ID=
MONGO_URI=
LOGS_URL=
```
- Inicia el bot con los siguientes comandos.
```bash
npm run build
pm2 start prod/index.js --name modmail
```

<br/>

Una vez hecho esto, ve a cualquier canal de tu servidor y ejecuta el comando ``+setup``.

<br/>

:::tip ¡Listo!
Tu bot ahora debería estar en línea.
:::