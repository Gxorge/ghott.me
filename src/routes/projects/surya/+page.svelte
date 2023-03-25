<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
</script>    

<svelte:head>
    <title>Surya | George Hotten</title>
</svelte:head>

<HeroTitle title="Surya Real Estate" subtitle="Made for my BTEC's Unit 28" colour="rgb(72, 95, 199)" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <h3><b>/</b> Quick Links</h3>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/georgeatsolihull/surya">github.com/georgeatsolihull/surya</a></li>
            <li>Live Preview: <a href="https://surya.ghott.me">surya.ghott.me</a></li>
        </ul>

        <h3><b>/</b> About</h3>
        <p>
            Surya Real Estate was created as part of my BTEC course work for Unit 28. The brief required me to create a website for a local real estate agency called Surya. My work was graded distinction.
            <br><br>
            The website is completely dynamic, fetching data from a live MySQL database based apon views, lised date and more. The site also has a user system, allowing users to register and login. Users are able to save properties to come back and view later.
        </p>

        <img src="/surya.png" alt="Surya Real Estate homepage." />
    </div>
</section>