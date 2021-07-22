<template><h1 id="hosting-your-bot-using-heroku" tabindex="-1"><a class="header-anchor" href="#hosting-your-bot-using-heroku" aria-hidden="true">#</a> Hosting your Bot using Heroku</h1>
<p>Heroku is a cloud platform as a service that supports several programming languages and that allows you to host some of your projects.</p>
<br/>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Hosting your bot on Heroku does not ensure a 100% uptime.<br/>
If you do not have a credit card linked to your Heroku account, your bot will not be online every day.</p>
</div>
<br/>
<ul>
<li>Create and account on <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku<OutboundLink/></a> or log in if you already have one.</li>
<li>Click on <strong>New</strong> and then on <strong>Create new app</strong>.</li>
</ul>
<p><img src="/images/Hk_New.png" alt=""></p>
<ul>
<li>Select a name for your app, the location that fits the best for you, and create the app.</li>
</ul>
<p><img src="/images/Hk_Create.png" alt=""></p>
<ul>
<li>Once in the dashboard, select <strong>GitHub</strong>.</li>
</ul>
<p><img src="/images/Hk_GitHub.png" alt=""></p>
<ul>
<li>Look for <strong>ModMail</strong> (your fork should appear) and click on <strong>Connect</strong>.</li>
</ul>
<p><img src="/images/Hk_Repo.png" alt=""></p>
<ul>
<li>Go to the <strong>Settings</strong> tab and look for the <em>Config Vars</em> section.</li>
</ul>
<p><img src="/images/Hk_ShowVars.png" alt=""></p>
<ul>
<li>Add the following variables with their corresponding values.
<ul>
<li>BOT_TOKEN: your Discord Bot Token. You can find it in the Bot Tab of the <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Discord's Developer Portal<OutboundLink/></a>.</li>
<li>MAIN_GUILD_ID: the ID of the server where the treads will be opened. If you do not know how to get an ID, check <a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer">this guide<OutboundLink/></a>.</li>
<li>MONGO_URI: the mongo URL you copied with the password replaced.</li>
<li>LOGS_URL: the URL where your logs will be hosted (make sure it ends in <code>/</code>). If you are not using any logs, just delete the line.</li>
</ul>
</li>
</ul>
<p><img src="/images/Hk_ShowedVars.png" alt=""></p>
<ul>
<li>Go to the <strong>Deploy</strong> tab and click on <em>Enable Automatic Deploys</em>. When it loads, click on <em>Deploy Branch</em> and wait for it to finish.</li>
</ul>
<p><img src="/images/Hk_Deploys.png" alt=""></p>
<ul>
<li>Go to the <strong>Resouces</strong> tab. There disable the <code>web</code> dyno and enable the <code>worker</code> one.</li>
</ul>
<p><img src="/images/Hk_Worker.png" alt=""></p>
<ul>
<li>Get back to the <strong>Deploy</strong> tab and click on <em>Deploy Branch</em> again.</li>
</ul>
<p><img src="/images/Hk_Deploy.png" alt=""></p>
<br/>
<div class="custom-container tip"><p class="custom-container-title">You are Done!</p>
<p>Your bot is now hosted on Heroku and it should appear online in your server.
<br/>
Please, remember the site limitations mentioned previously.</p>
</div>
</template>
