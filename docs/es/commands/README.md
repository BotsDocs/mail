---
title: Comandos
prev: /es/installation/heroku.md
next: /es/commands/configuration.md
---

# Comandos

Aquí encontrarás todos los comandos disponibles para el bot, pero antes de leer el resto de páginas, aquí tienes algunas cosas que tienes que saber sobre dichos comandos.

## Formato

Todos los comandos que se mostrarán tendrán como prefijo el `+`, si tienes algún otro prefijo configurado para tu bot, usa el que tienes establecido.

También podrás ver algunos comandos tienen parámetros con diferentes símbolos. Uno de ellos es `{ }` el cual significa que es obligatorio y el otro es `[ ]` lo que significará que es opcional usarlo.
<br/>
Es posible que encuentres algunos símbolos como estos: `< >`. En este caso, tendrás que escribir literalmente una de las palabras que estén como opción allí.
<br/>
En ningúno de estos casos tienes que utilizar los símbolos cuando estés ejecutando el comando.

Si un argumento tiene diferentes opciones disponibles, podrás ver todos ellos separados con un `/`.
<br/>
Algunos parámetros de los comandos pueden tener una opción que elimine o desactive un valor. En este caso, encontrarás un `/` o `" "`.
<br/>
Por ejemplo, en el comando:


```:no-line-numbers
+set logs {channel / "none"}
```

Puedes mencionar un canal, escribir la ID del canal o poner `none` si no quieres registros en ningún canal.

Otro aspecto que deberás de tener en cuenta es que algunos comandos que verás tendrán insignias <Badge text="como esta" vertical="middle" /> con el texto **Solo en Hilo**, que significa que dicho comando no fucionará fuera de un ticket.

Y por último pero no menos importante, algunos comandos requerirán que indiques un canal o un usuario, pero no todos aceptarán menciones. Por eso, cuando veas `channel/user`, podrás usar las dos <u>mención o una id</u>, y si ves `channelID/userID` tendrás que <u>usar solo la ID</u>.

## Permisos

Todos los comandos tienen por defecto niveles los cuales son: `ADMIN`, `SUPPORT` o `REGULAR`. Podrás encontrar estos niveles debajo de los comandos que tenemos en la documentación.
<br/>
Si un comando require permiso de SOPORTE (`SUPPORT`), entonces solos esos roles y usuarios con SOPORTE (`SUPPORT`) o ADMIN podrán usar el comando.

Puedes ver como configurar los permisos en la sección de [configuración de comandos](/commands/configuration.md).