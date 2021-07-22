<template><h1 id="hosting-your-logs-viewer" tabindex="-1"><a class="header-anchor" href="#hosting-your-logs-viewer" aria-hidden="true">#</a> Hosting your Logs Viewer</h1>
<p>The logs viewer allows you to render thread logs and display them with a nice dark theme.</p>
<ul>
<li><a href="https://github.com/ThePhoDit/ModMailLogs/fork" target="_blank" rel="noopener noreferrer">Fork<OutboundLink/></a> the Logs repository.</li>
<li>Install <a href="https://github.com/apps/pull" target="_blank" rel="noopener noreferrer">Pull<OutboundLink/></a> to your fork so that you can automatically download updates.</li>
<li>Create a <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel account<OutboundLink/></a> if you do not have one.</li>
<li>Create a new project and connect your GitHub account. Then select the ModMailLogs repo.</li>
</ul>
<p><img src="/images/Lg_Import.png" alt=""></p>
<ul>
<li>Select your personal account.</li>
<li>Click continue on the file selection window.</li>
<li>In the Environmental Variables section add <strong>MONGO_URI</strong> as the name and the URL you copied before as the value.</li>
</ul>
<p><img src="/images/Lg_Env.png" alt=""></p>
<ul>
<li>Copy the URL of your logs (make sure it ends in <code>/</code>).</li>
</ul>
<br/>
<div class="custom-container tip"><p class="custom-container-title">Done!</p>
<p>Your logs viewer should now deploy automatically when there is an available update.</p>
</div>
</template>
