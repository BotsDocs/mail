<template><h1 id="setting-up-the-database" tabindex="-1"><a class="header-anchor" href="#setting-up-the-database" aria-hidden="true">#</a> Setting up the Database</h1>
<p>The database is a really important part of your ModMail, as it saves your configuration and your logs. We will be using MongoDB, which offers a free hosting tier.</p>
<ul>
<li>Go to <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas<OutboundLink/></a> and create an account if you do not have one.</li>
</ul>
<p><img src="/images/Mg_Create.png" alt=""></p>
<ul>
<li>Give your project a name and select <strong>JavaScript</strong> as you preferred language.</li>
<li>Select the <strong>Shared Cluster</strong> option (the free one).</li>
</ul>
<p><img src="/images/Mg_Plan.png" alt=""></p>
<ul>
<li>Select the region that fits the best for you and click on <strong>Create Cluster</strong>.</li>
</ul>
<p><img src="/images/Mg_Region.png" alt=""></p>
<ul>
<li>Enter a username and a password and note it down, <strong>you will need them later</strong>!</li>
<li>Add the IP <code>0.0.0.0/0</code> to the IP Access List.</li>
</ul>
<p><img src="/images/Mg_Pass.png" alt=""></p>
<ul>
<li>Wait until your Cluster has been created.</li>
<li>Click on <strong>CONNECT</strong> and select the <strong>application</strong> option.</li>
</ul>
<p><img src="/images/Mg_Connect.png" alt=""></p>
<ul>
<li>Copy the link and replace <code>&lt;password&gt;</code> with the password you created before. You also need to replace <code>myFirstDatabase?retryWrites=true&amp;w=majority</code> with <code>ModMail</code>.</li>
<li>Save the link in a secure place, you will need it later.</li>
</ul>
</template>
