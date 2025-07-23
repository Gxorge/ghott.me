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

        <h2 class="gweb-link-black"><a href="projects/wmrpis">West Midlands Railway PIS Emulator</a> - 2025</h2>
        <p>
            A remake of the West Midlands Railway passenger-information-system used on their Class 172 fleet. 
        </p>

        <h2 class="gweb-link-black"><a href="https://railannouncements.co.uk/">Contributions to railannouncements.co.uk</a> - 2025</h2>
        <p class="gweb-link-black">
            Made by <a href="https://davwheat.dev">David</a>, I contributed recordings of PIS announcements made on West Midlands Railway's class 172 fleet. I also programmed the <a href="https://railannouncements.co.uk/rolling-stock/wmt-class-172/">announcements page</a> for that class of train.
        </p>

        <h2 class="gweb-link-black"><a href="projects/tkmpuller">TKM Puller</a> - 2025</h2>
        <p class="gweb-link-black">
            Whilst working at TK Maxx, I made website that pulls data from <a href="https://tkmaxx.com">tkmaxx.com</a> to aid in activities such as item lookups. TK Maxx had no system in place for this.
        </p>

        <h2 class="gweb-link-black"><a href="projects/crepculture">Crep Culture</a> - 2024-2025</h2>
        <p class="gweb-link-black">
            Part of the work I had to complete for my <a href="https://aston.georgehotten.uk/year2/cs2tp">Aston University Team Project</a> module. We had to make an e-commerce website follow a very specific list of requirements. I achieved a first in this module.
        </p>


        <h2 class="gweb-link-black"><a href="projects/theherobrine">The Herobrine!</a> - 2023</h2>
        <p>
            The Herobrine! is my remake of an old Hive MC game-mode that was removed in their Java 2 update.
        </p>

        <h2 class="gweb-link-black"><a href="projects/bubbletill">Bubbletill</a> - 2023</h2>
        <p>
            Bubbletill is a Point of Sale solution powered by .NET. It is still in-progress, and was more of a passion project when I was younger. Most likely will never be finished, but maybe someday.
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