<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Surya | George Hotten</title>
    <meta content="Surya Real Estate | George Hotten" property="og:title" />
    <meta content="A real estate website created for my BTEC qualification." property="og:description" />
    <meta content="https://george.hotten.uk/surya" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#485fc7">
</svelte:head>

<HeroTitle title="Surya Real Estate" subtitle="Made for my BTEC's Unit 28" colour="rgb(72, 95, 199)" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/georgeatsolihull/surya">github.com/georgeatsolihull/surya</a></li>
            <li>Live Preview: <a href="https://surya.ghott.me">surya.ghott.me</a></li>
        </ul>

        <h2>About</h2>
        <p>
            Surya Real Estate was created as part of my BTEC course work for Unit 28. The brief required me to create a website for a local real estate agency called Surya. My work was graded distinction.
            <br><br>
            The website is completely dynamic, fetching data from a live MySQL database based apon views, lised date and more. The site also has a user system, allowing users to register and login. Users are able to save properties to come back and view later.
        </p>

        <img src="/surya.png" alt="Surya Real Estate homepage." />
    </div>
</section>