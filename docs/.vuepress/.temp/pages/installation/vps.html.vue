<template><h1 id="hosting-your-bot-using-a-vps" tabindex="-1"><a class="header-anchor" href="#hosting-your-bot-using-a-vps" aria-hidden="true">#</a> Hosting your Bot using a VPS</h1>
<p>Hosting your ModMail with a VPS is the best option for stability and performance reasons.</p>
<ul>
<li>Access your VPS.</li>
<li><a href="https://www.hostinger.com/tutorials/how-to-install-node-ubuntu" target="_blank" rel="noopener noreferrer">Install NodeJS<OutboundLink/></a> if you do not have it.</li>
<li>Install Git if you do not have it.</li>
</ul>
<p><img src="/images/VPS_Git.png" alt=""></p>
<blockquote>
<p>Image from <a href="https://lowendbox.com/blog/setting-up-git-for-free-on-a-vps/" target="_blank" rel="noopener noreferrer">LowEndBox<OutboundLink/></a></p>
</blockquote>
<ul>
<li>Go to the directory you would like to install your ModMail.</li>
<li>Clone your repo with the URL you <RouterLink to="/installation/github.html">copied from GitHub</RouterLink> when you forked the main one.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>your URL<span class="token operator">></span>
<span class="token builtin class-name">cd</span> ModMail
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>Install the dependencies and PM2.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> <span class="token function">install</span> -g pm2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>Create a file named <code>.env</code> and copy the content from the <code>.env.template</code> file and fill the variables.
<ul>
<li>BOT_TOKEN: your Discord Bot Token. You can find it in the Bot Tab of the <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Discord's Developer Portal<OutboundLink/></a>.</li>
<li>MAIN_GUILD_ID: the ID of the server where the treads will be opened. If you do not know how to get an ID, check <a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer">this guide<OutboundLink/></a>.</li>
<li>MONGO_URI: the mongo URL you copied with the password replaced.</li>
<li>LOGS_URL: the URL where your logs will be hosted (make sure it ends in <code>/</code>). If you are not using any logs, just delete the line.</li>
</ul>
</li>
</ul>
<div class="language-env ext-env line-numbers-mode"><pre v-pre class="language-env"><code>BOT_TOKEN=
MAIN_GUILD_ID=
MONGO_URI=
LOGS_URL=
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>Start the bot with the following commands.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
pm2 start prod/index.js --name modmail
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br/>
<div class="custom-container tip"><p class="custom-container-title">Success</p>
<p>Your bot should already be online.</p>
</div>
</template>
