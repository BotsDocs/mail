---
title: Comandos de Conversación
prev: /es/commands/configuration.md
next: /es/commands/public.md
---

# Comandos de Conversación

Aquí tienes todos los comandos relacionados con las conversaciones entre el usuario y el personal, también conocido como tickets.

## +reply {contenido} <Badge text="Solo en Tickets" vertical="middle" />

Envía una respuesta a un ticket.

- **Ejemeplo de uso:**
<br/>
`+reply ¿Necesitas algo más?`

- **Permiso:** SUPPORT
- **Alias:** `r`

## +areply {contenido} <Badge text="Solo en Tickets" vertical="middle" />

Envía una respuesta a un ticket sin que el destinatario sepa quién escribió el mensaje.

- **Ejemeplo de uso:**
<br/>
`+areply ¿Necesitas algo más?`

- **Permiso:** SUPPORT
- **Alias:** `anonreply`

## +close [tiempo] [razón] <Badge text="Solo en Tickets" vertical="middle" />

Cierra un ticket. Si proporcionas un tiempo, se cierra una vez transcurrido el tiempo. Si proporcionas una razón, se anulará la descripción del embed predeterminado.
<br/>
El formato para el tiempo es, por ejemplo, `3w` para tres semanas,`1d` para un día, `10m` para diez minutos, etc.
- **Ejemplo de uso:**
<br/>
`+close` - Cierra inmediatamente. 
<br/>
`+close 2h` - Cierra a las 2 horas.
<br/>
`+close Nos vemos pronto` - Cierra inmediatamente con un mensaje específico.
<br/>
`+close 2h Nos vemos pronto` - Cierra después de 2 horas con un mensaje específico.

- **Permiso:** SUPPORT
- **Alias:** `c`

## +edit {ID del mensaje} {nuevo contenido} <Badge text="Solo en Tickets" vertical="middle" />

Edita un mensaje enviado por el bot. La ID proporcionada debe ser la ID del mensaje enviado por el bot (el que tiene el embed), y debe ser una respuesta del personal.

- **Ejemplo de uso:**
<br/>
`+edit 12345678900987 Hola, este contenido es mejor :)`

- **Permiso:** SUPPORT

## +delete {ID del mensaje} <Badge text="Solo en Tickets" vertical="middle" />

Elimina un mensaje enviado por el bot. La ID proporcionada debe ser la ID del mensaje enviado por el bot (el que tiene el embed), y debe ser una respuesta del personal.

- **Ejemplo de uso:**
<br/>
`+delete 12345678900987`

- **Permiso:** SUPPORT

## +subscribe <Badge text="Solo en Tickets" vertical="middle" />

Te notifica cada respuesta nueva respuesta en un ticket.

- **Ejemplo de uso:**
<br/>
`+subscribe`

- **Permiso:** SUPPORT

## +unsubscribe <Badge text="Solo en Tickets" vertical="middle" />

Deja de notificarte cada nueva respuesta en un ticket.

- **Ejemplo de uso:**
<br/>
`+unsubscribe`

- **Permiso:** SUPPORT

## +contact {usuario} <Badge text="Solo en Tickets" vertical="middle" />

Crea un ticket con usuario especifico.

- **Ejemplo de uso:**
<br/>
`+contact 1234567890098`
<br/>
`+contact @Mail#7071`

- **Permiso:** SUPPORT
- **Alias:** `open`

## +id <Badge text="Solo en Tickets" vertical="middle" />

Envía la ID del destinatario.

- **Ejemplo de uso:**
<br/>
`+id`

- **Permiso:** SUPPORT

## +title {título / "removetitle" } <Badge text="Solo en Tickets" vertical="middle" />

Establece un título para el ticket que se mostrará en los registros.

- **Ejemplo de uso:**
<br/>
`+title Conversación importante` - Establece el título a **Conversación importante**.
<br/>
`+title removetitle` - Elimina el título.

- **Permiso:** SUPPORT

## +note {contenido / "removenote" } <Badge text="Solo en Tickets" vertical="middle" />

Establece una nota para el ticket que se mostrará en los registros.

- **Ejemplo de uso:**
<br/>
`+note Este usuario es muy amable :D` - Establece la nota a **Este usuario es muy amable :D**.
<br/>
`+note removenote` - Elimina la nota.

- **Permiso:** SUPPORT

## +nsfw <Badge text="Solo en Tickets" vertical="middle" />

Cambia un canal a NSFW o lo deshabilita si ya estaba habilitado.

- **Ejemplo de uso:**
<br/>
`+nsfw`

- **Permiso:** SUPPORT

## +rename {nombre} <Badge text="Solo en Tickets" vertical="middle" />

Cambia el nombre del ticket.

- **Ejemplo de uso:**
<br/>
`+rename Ticket-especial`

- **Permiso:** ADMIN

## +blacklist <add / remove> [usuario]

Cambia el estado de la lista negra de un miembro. Si se ejecuta <u>en un ticket</u>, el usuario será añadido a la lista negra o será eliminado de la lista negra. De lo contrario, debes proporcionar la ID del usuario.

- **Ejemplo de uso:**
<br/>
`+blacklist add` - En un ticket, añade al usuario a la lista negra.
<br/>
`+blacklist remove 1231943214` - Fuera de un ticket, elimina al usuario especificado de la lista negra.

- **Permiso:** ADMIN
- **Alias:** `bl`

## +userlogs {ID de un usuario}

Obtiene todos los registros anteriores del usuario con la ID especificada.

- **Ejemplo de uso:**
<br/>
`+userlogs 123890090934334`

- **Permiso:** SUPPORT
- **Alias:** `logs`

## +move {nombre de la categoría}

Mueve el ticket a una categoría [previamente configurada](/es/commands/configuration.md#category-add-nombre-id-de-la-categoria=) con ese nombre. Esto se puede utilizar para crear un sistema en el que los hilos corresponden a equipos de soporte diferentes.
<br/>
Los canales se sincronizarán a los permisos de las categorías salvo que se modifiquen manualmente.

- **Ejemplo de uso:**
<br/>
`+move main`
- **Permiso:** ADMIN