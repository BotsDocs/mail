(self.webpackChunkModMail=self.webpackChunkModMail||[]).push([[43],{6542:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-31cde10d",path:"/es/installation/vps.html",title:"Usando una VPS",lang:"es-ES",frontmatter:{title:"Usando una VPS",prev:"/es/installation/logs.md",next:"/es/installation/heroku.md"},excerpt:"",headers:[],filePathRelative:"es/installation/vps.md",git:{updatedTime:1628196522e3,contributors:[]}}},3247:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>E});var s=a(6252);const l=(0,s.Wm)("h1",{id:"usando-una-vps",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#usando-una-vps","aria-hidden":"true"},"#"),(0,s.Uk)(" Usando una VPS")],-1),o=(0,s.Wm)("p",null,"Alojar un Bot con una VPS es la mejor opción por razones de estabilidad y rendimiento.",-1),t=(0,s.Wm)("li",null,"Accede a tu VPS.",-1),i={href:"https://www.hostinger.com/tutorials/how-to-install-node-ubuntu",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("Instala NODE.JS"),u=(0,s.Uk)(" si aún no lo tienes."),c=(0,s.Wm)("li",null,"Instala Git si aún no lo tienes.",-1),d=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:"/images/VPS_Git.png",alt:""})],-1),p=(0,s.Uk)("Imagen de "),m={href:"https://lowendbox.com/blog/setting-up-git-for-free-on-a-vps/",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("LowEndBox"),g=(0,s.Wm)("li",null,"Ve al directorio que quieras instalar en tu ModMail.",-1),k=(0,s.Uk)("Clona el repositorio que "),v=(0,s.Uk)("copiaste de GitHub"),h=(0,s.Uk)(" como Fork principal."),W=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>tu URL<span class="token operator">&gt;</span>\n<span class="token builtin class-name">cd</span> ModMail\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Instala las dependencias y PM2.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>\n<span class="token function">npm</span> <span class="token function">install</span> -g pm2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),U=(0,s.Uk)("Crea un archivo con el nombre "),f=(0,s.Wm)("code",null,".env",-1),I=(0,s.Uk)(" y copia el contenido del archivo "),_=(0,s.Wm)("code",null,".env.template",-1),M=(0,s.Uk)(" y completa las variables. "),L=(0,s.Uk)("BOT_TOKEN: el token de tu Bot de Discord. Puedes encontrarlo en la pestaña de Bot de "),S={href:"https://discord.com/developers/applications",target:"_blank",rel:"noopener noreferrer"},O=(0,s.Uk)("Discord's Developer Portal"),D=(0,s.Uk)("."),w=(0,s.Uk)("MAIN_GUILD_ID: la ID del servidor donde se abrirán los tickets. Si no sabes como encontrar una ID, revisa "),x={href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("esta guía"),G=(0,s.Uk)("."),R=(0,s.Wm)("li",null,"MONGO_URI: la URL de mongo que copiaste con la contraseña reemplazada.",-1),q=(0,s.Wm)("li",null,[(0,s.Uk)("LOGS_URL: la URL donde se almacenarán tus registros (asegúrate que termine con "),(0,s.Wm)("code",null,"/"),(0,s.Uk)("). Si no estás utilizando ningún registro, solo elimina esta línea.")],-1),y=(0,s.uE)('<div class="language-env ext-env line-numbers-mode"><pre class="language-env"><code>BOT_TOKEN=\nMAIN_GUILD_ID=\nMONGO_URI=\nLOGS_URL=\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>Inicia el bot con los siguientes comandos.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build\npm2 start prod/index.js --name modmail\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br><p>Una vez hecho esto, ve a cualquier canal de tu servidor y ejecuta el comando <code>+setup</code>.</p><br><div class="custom-container tip"><p class="custom-container-title">¡Listo!</p><p>Tu bot ahora debería estar en línea.</p></div>',7),E={render:function(e,n){const a=(0,s.up)("OutboundLink"),E=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[l,o,(0,s.Wm)("ul",null,[t,(0,s.Wm)("li",null,[(0,s.Wm)("a",i,[r,(0,s.Wm)(a)]),u]),c]),d,(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,[p,(0,s.Wm)("a",m,[b,(0,s.Wm)(a)])])]),(0,s.Wm)("ul",null,[g,(0,s.Wm)("li",null,[k,(0,s.Wm)(E,{to:"/installation/github.html"},{default:(0,s.w5)((()=>[v])),_:1}),h])]),W,(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[U,f,I,_,M,(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[L,(0,s.Wm)("a",S,[O,(0,s.Wm)(a)]),D]),(0,s.Wm)("li",null,[w,(0,s.Wm)("a",x,[P,(0,s.Wm)(a)]),G]),R,q])])]),y],64)}}}}]);