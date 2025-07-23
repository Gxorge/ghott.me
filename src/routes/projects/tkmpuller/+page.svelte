<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>TKM Puller | George Hotten</title>
    <meta content="TKM Puller | George Hotten" property="og:title" />
    <meta content="Making my life easier at TK Maxx." property="og:description" />
    <meta content="https://george.hotten.uk/tkmpuller" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#004494">
</svelte:head>

<HeroTitle title="TKM Puller" subtitle="Making my life easier at TK Maxx" colour="#EC1B2E" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code (backend): <a href="https://github.com/gxorge/tkm-puller">github.com/gxorge/tkm-puller</a></li>
            <li>Source Code (website): <a href="https://github.com/gxorge/tkm-puller-web">github.com/gxorge/tkm-puller-web</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            Whilst working at TK Maxx, I made website that pulls data from <a href="https://tkmaxx.com">tkmaxx.com</a> to aid in activities such as item lookups. TK Maxx had no system in place for this.
            <br><br>
            TKM Puller, as the name suggests, pulls data down from the TK Maxx website and stores it locally. Users of the website can then search for items via a department and style code. Users can also enter a department code and a price, and the website will return a full item code for that price. It wasn't the correct code for that item, but it didn't matter. TK Maxx's system was weird.
        </p>

        <img src="/tkmpuller.png" alt="Example result of searching a department and style code." />
    </div>
</section>