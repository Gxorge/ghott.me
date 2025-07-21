<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Projects | George Hotten</title>
    <meta content="My Work | George Hotten" property="og:title" />
    <meta content="Is the project done? Is it not? Let's find out!" property="og:description" />
    <meta content="https://george.hotten.uk/projects" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#821a1b">
</svelte:head>

<HeroTitle title="My Work" subtitle="Is the project done? Is it not? Let's find out!"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2 class="gweb-link-black"><a href="projects/theherobrine">The Herobrine!</a> - 2023</h2>
        <p>
            The Herobrine! is my remake of an old Hive MC game-mode that was removed in their Java 2 update.
        </p>

        <h2 class="gweb-link-black"><a href="projects/bubbletill">Bubbletill</a> - 2023</h2>
        <p>
            Bubbletill is a Point of Sale solution powered by Java at the front end and Python at the backend. Why did I make this? I don't know. Its not finished and probably never will be.
        </p>

        <h2 class="gweb-link-black"><a href="/projects/surya">Surya Real Estate</a> - 2022</h2>
        <p>
            Part of my BTEC course work for Unit 28. The brief required me to create a website for a local real estate agency called Surya. My work was graded distinction.
        </p>

        <h2 class="gweb-link-black"><a href="/projects/isborisgone">Is Boris Gone?</a> - 2021</h2>
        <p class="gweb-link-black">
            A website created with <a href="https://thomasr.me">Thomas</a> and <a href="https://lewisakura.moe">Lewis</a> to know when the UK's former Prime Minister, Boris Johnson, has left No 10.
        </p>

        <h2 class="gweb-link-black"><a href="/projects/uhccenter">UHC Center</a> - 2020</h2>
        <p class="gweb-link-black">
            A Minecraft UHC network created with <a href="https://lewisakura.moe">Lewis</a>, built completely from in-house.
        </p>

        <h2 class="gweb-link-black"><a href="projects/aoc">Advent of Code Solutions</a> - 2015-2023</h2>
        <p>
            All my solutions for Advent of Code 2015-2022. Not all years are finished, but are you surprised?
        </p>
    </div>
</section>