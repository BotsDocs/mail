---
title: Alojar tu Visualizador de Registros
prev: /es/installation/mongo.md
next: /es/installation/vps.md
---

# Alojar tu Visualizador de Registros

El Visualizador de Registros te permite ver registros de tickets y mostrarlos con un bonito tema oscuro.

- [Fork](https://github.com/ThePhoDit/ModMailLogs/fork) el repositorio de Logs.
- Instala [Pull](https://github.com/apps/pull) en tu Fork para que puedas descargar actualizaciones automáticamente.
- Crea una [Vercel account](https://vercel.com/) si aún no tienes una.
- Crea un nuevo proyecto y conecta tu cuenta de GitHub. Luego selecciona el repositorio de ModMailLogs.

![](/images/Lg_Import.png)

- Selecciona tu cuenta personal.
- Haz clic en la pestaña de selección de archivos.
- En la sección Environmental Variables añade **MONGO_URI** como el nombre y la URL que copiaste antes como el valor.

![](/images/Lg_Env.png)

- Copia la URL de tus registros (asegúrate que termine con `/`).

<br/>

:::tip ¡Listo!
Tu Visualizador de Registros ahora debería implementarse automáticamente cuando haya una actualización disponible.
:::