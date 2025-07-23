<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Crep Culture | George Hotten</title>
    <meta content="Crep Culture | George Hotten" property="og:title" />
    <meta content="A shoe selling website created for my university qualification." property="og:description" />
    <meta content="https://george.hotten.uk/crepculture" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#485fc7">
</svelte:head>

<header class="hero" style="background-color: rgb(31, 31, 31)">
    <div class="hero-body hero-text-padding ">
        <h1 class="title cc-hero-title">
            Crep Culture
        </h1>
        <h2 role="doc-subtitle" class="subtitle cc-hero-subtitle">
            Made for my university's team project
        </h2>
    </div>
</header>

<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/georgeataston/cs2tp">github.com/georgeataston/cs2tp</a></li>
            <li>Live Preview: <a href="https://crepculture.shop">crepculture.shop</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            Part of the work I had to complete for my <a href="https://aston.georgehotten.uk/year2/cs2tp">Aston University Team Project</a> module. We had to make an e-commerce website follow a very specific list of requirements. I achieved a first in this module.
            <br><br>
            The website is completely dynamic, fetching data from a live MySQL database. 
            The site has a full user and checkout system, allowing users to create an account then buy and track their orders. 
            Crep Culture also has a fully featured admin section, allowing for easy order fulfillment and item management.
        </p>

        <img src="/crepculture.png" alt="Crep Culture shop page." />
    </div>
</section>

<style lang="scss">
    .cc-hero-title {
        color: #ff9000;
    }

    .cc-hero-subtitle {
        color: rgb(255, 255, 255);
    }
</style>