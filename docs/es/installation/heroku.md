---
title: Usando Heroku
prev: /es/installation/vps.md
next: /es/commands/README.md
---

# Usando Heroku

Heroku es una plataforma en la nube como servicio que admite varios lenguajes de programación y que te permite alojar algunos de tus proyectos.

<br/>

:::warning Advertencia
Alojar un bot en Herokuno no garantiza un tiempo de actividad del 100%.<br/>
Si no tienes una tarjeta de crédito vinculada a su cuenta de Heroku, tu bot no estará en línea todos los días.
:::

<br/>

- Crea una cuenta en [Heroku](https://www.heroku.com/) o inicia sesión si ya tienes una.
- Haz clic en **New** y luego en **Create new app**.

![](/images/Hk_New.png)

- Selecciona un nombre para la aplicación y selecciona la región que prefieras y crea la aplicación.

![](/images/Hk_Create.png)

- Una vez en el panel, haz clic en **GitHub**.

![](/images/Hk_GitHub.png)

- Busca **ModMail** (debería aparecer tu fork) y haz clic en **Connect**.

![](/images/Hk_Repo.png)

- Ve a la pestaña de **Settings** y busca la sección *Config Vars*.

![](/images/Hk_ShowVars.png)

- Añade las siguientes variables con sus valores correspondientes.
    - BOT_TOKEN: el token de tu Bot de Discord. Puedes encontrarlo en las pestaña de Bot de [Discord's Developer Portal](https://discord.com/developers/applications).
    - MAIN_GUILD_ID: la ID del servidor donde se abrirán los tickets. Si no sabes como encontrar una ID, revisa [esta guía](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).
    - MONGO_URI: la URL de mongo que copiaste con la contraseña reemplazada.
    - LOGS_URL: la URL donde se almacenarán tus registros (asegúrate que termine con `/`). Si no estás utilizando ningún registro, solo elimina esta línea.

![](/images/Hk_ShowedVars.png)

- Ve a la pestaña de **Deploy** y haz clic en *Enable Automatic Deploys*. Cuando haya cargado, haz clic en *Deploy Branch* y espera a que finalice.

![](/images/Hk_Deploys.png)

- Ve a la pestaña de **Resouces**. Una vez allí deshabilita el dyno `web` y habilita el `worker`.

![](/images/Hk_Worker.png)

- Vuelve a la pestaña de **Deploy** y haz clic en *Deploy Branch* nuevamente.

![](/images/Hk_Deploy.png)

<br/>

Una vez hecho esto, ve a cualquier canal de tu servidor y ejecuta el comando ``+setup``.

<br/>

:::tip ¡Estás listo!
Tu bot ahora está alojado en Heroku y debería aparecer en línea en tu servidor.
<br/>
Por favor, recuerda las limitaciones del sitio anteriormente mencionadas.
:::