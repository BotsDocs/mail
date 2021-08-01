---
title: Configurar la Base de Datos
prev: /es/installation/discord.md
next: /es/installation/logs.md
---

# Configurar la Base de Datos

La Base de Datos es una parte muy importante de tu ModMail, ya que guarda la configuración y sus registros. Usaremos MongoDB, que ofrece un servicio de alojamiento gratuito.

- Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o crea una cuenta si aún no tienes una.

![](/images/Mg_Create.png)

- Asigna un nombre a tu proyecto y selecciona **JavaScript** como idioma preferido.
- Selecciona la opción **Shared Cluster** (la gratuita).

![](/images/Mg_Plan.png)

- Selecciona la región que prefieras y haz clic en **Create Cluster**.

![](/images/Mg_Region.png)

- Ingresa un nombre de usuario y una contraseña y anótalos, ¡**Los necesitarás más tarde**!
  <br/>
  Este usuario y esta contraseña son distintos que los de tu cuenta de Atlas, sirven para acceder a tu base de datos.
- Añade la IP `0.0.0.0/0` en la lista de acceso de IPs. Así permitirás acceso a todas las IPs, incluida la de tu servicio de alojamiento.

![](/images/Mg_Pass.png)

- Espera hasta que se haya creado tu Cluster.
- Haz clic en **CONNECT** y selecciona la opción **application**.

![](/images/Mg_Connect.png)

- Copia el enlace y reemplaza `<password>` por la contraseña que creaste anteriormente. También necesitas reemplazar `myFirstDatabase?retryWrites=true&w=majority` por `ModMail`.
- Guarda el enlace en un lugar seguro, lo necesitarás más tarde.