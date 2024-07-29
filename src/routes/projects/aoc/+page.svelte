<script lang="ts">
    import '$lib/HeroTitle.scss';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>

<svelte:head>
    <title>Advent of Code Solutions | George Hotten</title>
    <meta content="Advent of Code Solutions | George Hotten" property="og:title" />
    <meta content="All my solutions for Advent of Code 2015-2022." property="og:description" />
    <meta content="https://george.hotten.uk/aoc" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.ico" property="og:image" />
</svelte:head>

<header class="hero" style="background-color: rgb(15, 15, 35)">
    <div class="hero-body hero-text-padding">
        <h1 class="title aoc-hero-title">
            Advent of Code Solutions
        </h1>
        <h2 role="doc-subtitle" class="subtitle aoc-hero-subtitle">
            The programming advent calendar
        </h2>
    </div>
</header>

<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/gxorge/advent-of-code">github.com/gxorge/advent-of-code</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            <a href="https://adventofcode.com">Advent of Code</a> is a programming advent calendar created by <a href="http://was.tl/">Eric Wastl</a> that consists of daily small programming puzzles for a variety of skill levels. I personally use a mix of Kotlin and Python to solve each day. I have completed every challange for 2022 and I'm working towards completing the rest of the previous year's challanges.
        </p>
    </div>
</section>

<style lang="scss">
    .aoc-hero-title {
        color: rgb(255, 255, 102);
        text-shadow: rgb(255, 255, 102) 0px 0px 5px;
    }

    .aoc-hero-subtitle {
        color: white;
        text-shadow: rgb(255, 255, 255) 0px 0px 5px;
    }
</style>