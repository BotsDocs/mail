---
title: Comandos de Configuración
prev: /es/commands/README.md
next: /es/commands/conversation.md
---

# Comandos de Configuración

Tener un ModMail bien configurado es esencial para una experiencia personalizada. Aquí tienes diferentes comandos para configurar permisos, textos, imágenes, etc.

## +permission {nombreDelNivel / nombreDelComando} <add / remove> {ID de un Rol / ID de un Usuario}

Establece un permiso particular para un nivel o comando para es rol o usuario especificado.
<br/>
Los nombres de niveles disponibles son: **REGULAR**, **SUPPORT** and **ADMIN**.

Si usas el nombre de un nivel, el usuario o rol seleccionado será capaz de utilizar todos los comandos que requieren ese permiso e inferiores.
<br/>
Sin embargo, también puedes especificar el nombre de un comando, para así solo proporcionar permisos para ese comando.

- **Ejemplo de uso:**
<br/>
`+permission ADMIN add 1234567890` - Añade permisos de ADMIN (todos) a la ID (1234567890), que puede ser la de un rol o la de un usuario.
<br/>
`+permission reply remove 2323445662` - Quita el permiso para usar el comando reply a la ID (2323445662), siendo la de un rol o la de un usuario. Para hacerlo, debe haber sido añadida con anterioridad.
  
    > Si quieres que un permiso afecte a todos los miembros, puedes usar la ID del servidor.

- **Permiso:** ADMIN

## +set {key} {value}

Cambia la mayoría de los parámetros del bot. Debajo tienes una tabla con todas las posibles opciones para el campo **key**.
<br/>
Para el campo **Value**, simplemente manda el texto correspondiente a la descripción.

| key                           | descripción                                                                                                                                                                                                                                                                                       |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| avatar                        | manda una imagen y cambiará el avatar de tu bot.                                                                                                                                                                                                                                                  |
| username                      | cambia el **nombre de usuario** de tu bot, no el apodo.                                                                                                                                                                                                                                           |
| prefix                        | cambia el prefix de tu bot.                                                                                                                                                                                                                                                                       |
| category                      | manda la ID de la categoría donde quieras que se abran los nuevos hilos.                                                                                                                                                                                                                          |
| logs                          | manda la ID o menciona el canal donde quieres que aparezcan tus logs al cerrar un hilo. Usa `none` para desactivarlos                                                                                                                                                                             |
| status                        | cambia el estado de tu bot.                                                                                                                                                                                                                                                                       |
| status_type                   | cambia el tipo del estado de tu bot a: `playing`, `streaming`, `listening`, `watching` o `competing`. Si eliges streaming, añade una URL de un canal de Twitch o uin vídeo/directo de YouTube.                                                                                                    |
| account_age                   | la edad que tiene que tener una cuenta para abrir un hilo. Usa `0` para desactivarlo. El formato es, por ejemplo, `3w` para tres semanas, `1d` para un día, `10m` para diez minutos, etc. (se corresponden a las iniciales de las palabras inglesas correspondientes).                            |
| guild_age                     | el tiempo que ha tenido que estar una cuenta en el servidor para poder abrir un hilo. Usa `0` para desactivarlo. El formato es, por ejemplo, `3w` para tres semanas, `1d` para un día, `10m` para diez minutos, etc. (se corresponden a las iniciales de las palabras inglesas correspondientes). |
| guild_age_id                  | la ID del server donde se necesita tener la **guild_age** especificada. Si no está configurado, usa el server donde se abren los hilos.                                                                                                                                                           |
| embed_creation_title          | el título del embed que se envía al usuario cuando abre un hilo.                                                                                                                                                                                                                                  |
| embed_creation_thumbnail      | la imagen de la cabecera del embed que se envía al usuario cuando abre un hilo.                                                                                                                                                                                                                   |
| embed_creation_description    | la descripción del embed que se envía al usuario cuando abre un hilo.                                                                                                                                                                                                                             |
| embed_creation_color          | el color (código hex) del embed que se envía al usuario cuando abre un hilo.                                                                                                                                                                                                                      |
| embed_creation_footer_text    | el pie (footer) del embed que se envía al usuario cuando abre un hilo.                                                                                                                                                                                                                            |
| embed_creation_footer_image   | la imagen del pie del embed que se envía al usuario cuando abre un hilo. Usa `none` para desactivarlo.                                                                                                                                                                                            |
| embed_contact_title           | el título del embed que se envía al usuario cuando el personal abre un hilo.                                                                                                                                                                                                                      |
| embed_contact_thumbnail       | la imagen de la cabecera del embed que se envía al usuario cuando el personal abre un hilo.                                                                                                                                                                                                       |
| embed_contact_description     | la descripción del embed que se envía al usuario cuando el personal abre un hilo.                                                                                                                                                                                                                 |
| embed_contact_color           | el color (código hex) del embed que se envía al usuario cuando el personal abre un hilo.                                                                                                                                                                                                          |
| embed_contact_footer_text     | el pie (footer) del embed que se envía al usuario cuando el personal abre un hilo.                                                                                                                                                                                                                |
| embed_contact_footer_image    | la imagen del pie del embed que se envía al usuario cuando el personal abre un hilo.                                                                                                                                                                                                              |
| embed_closure_title           | el título del embed que se envía al usuario cuando se cierra un hilo.                                                                                                                                                                                                                             |
| embed_closure_thumbnail       | la imagen de la cabecera del embed que se envía al usuario cuando se cierra un hilo.                                                                                                                                                                                                              |
| embed_closure_description     | la descripción del embed que se envía al usuario cuando se cierra un hilo.                                                                                                                                                                                                                        |
| embed_closure_color           | el color (código hex) del embed que se envía al usuario cuando se cierra un hilo.                                                                                                                                                                                                                 |
| embed_closure_footer_text     | el pie (footer) del embed que se envía al usuario cuando se cierra un hilo.                                                                                                                                                                                                                       |
| embed_closure_footer_image    | la imagen del pie del embed que se envía al usuario cuando se cierra un hilo.                                                                                                                                                                                                                     |
| embed_staff_title             | el título del embed enviado al personal cuando se abre un hilo.                                                                                                                                                                                                                                   |
| embed_staff_color             | el color (código hex) del embed enviado al personal cuando se abre un hilo.                                                                                                                                                                                                                       |

- **Ejemplo de uso:**
<br/>
`+set status Manda un mensaje para obtener ayuda` - Cambia el estado del bot a **Manda un mensaje para obtener ayuda**.

- **Permiso:** ADMIN
- **Alias:** `s`

## +alias <add / remove> {nombre del alias} {nombre del comando}

Te permite establecer aliases para los comandos, personalizando cómo los activas.

- **Ejemplo de uso:**
<br/>
`+alias add responder reply` - Convierte el "comando" **responder** en un alias del comando **reply**, dándole la misma funcionalidad.

- **Permiso:** ADMIN
- **Alias:** `aliases`

## +snippet <create / edit> {nombre} {contenido}

Te permite crear o editar un snippet o mensaje predefinido que puedes usar en los hilos como si fuesen comandos independientes.

- **Ejemplo de uso:**
<br/>
`+snippet create hola ¡Hola! Bienvenido al equipo de soporte` - Crea un snippet llamado **hola**. Cuando uses el comando `+hola` el texto especificado se mandará automáticamente.

- **Permiso:** ADMIN
- **Aliases:** `qr`, `quickreply`

## +snippet delete {nombre}

Borra el snippet especificado.

- **Ejemplo de uso:**
<br/>
`+snippet delete hola` - Borra el snippet **hola**.

- **Permiso:** ADMIN
- **Aliases:** `qr`, `quickreply`

## +snippet list

Muestra la lista de todos los snippets disponibles.

- **Ejemplo de uso:**
<br/>
`+snippet list`

- **Permiso:** ADMIN
- **Aliases:** `qr`, `quickreply`