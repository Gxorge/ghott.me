<script lang="ts">
    import '$lib/HeroTitle.scss';
</script>

<svelte:head>
    <title>Advent of Code Solutions | George Hotten</title>
</svelte:head>

<section class="hero" style="background-color: rgb(15, 15, 35)">
    <div class="hero-body">
        <p class="title hero-text-padding aoc-hero-title">
            <b>//</b><span class="hero-title-padding">Advent of Code Solutions</span>
        </p>
        <p class="subtitle hero-text-padding aoc-hero-subtitle">
            <b>/</b><span class="hero-subtitle-padding">The programming advent calendar</span>
        </p>
    </div>
</section>
<section class="gweb-text-layout">
    <div class="content">
        <h3><b>/</b> Quick Links</h3>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/gxorge/advent-of-code">github.com/gxorge/advent-of-code</a></li>
        </ul>

        <h3><b>/</b> About</h3>
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