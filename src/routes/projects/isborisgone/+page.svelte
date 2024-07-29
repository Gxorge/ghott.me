<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Is Boris Gone? | George Hotten</title>
    <meta content="Is Boris Gone? | George Hotten" property="og:title" />
    <meta content="A silly website to track when the UK PM Boris Johnson resigns." property="og:description" />
    <meta content="https://george.hotten.uk/isborisgone" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#713f12">
</svelte:head>

<HeroTitle title="Is Boris Gone?" subtitle="Funny website to see if boris is gone yet" colour="rgba(113, 63, 18)" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/gxorge/isborisgone">github.com/gxorge/isborisgone</a></li>
            <li>Live Preview: <a href="https://isborisg.one">isborisg.one</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            Is Boris Gone? is a website that me and my friends <a href="https://thomasr.me" target="_blank" rel="noopener">Thomas</a> and <a href="https://lewisakura.moe" target="_blank" rel="noopener">Lewis</a> created to know how long the former Prime Minister, Boris Johnson, had been in office for and if he had resigned. All of the data was pulled automatically from the government's official API. 
        </p>

        <img src="/isborisgone.jpg" alt="Is Boris Gone? website after he resigned." />
    </div>
</section>