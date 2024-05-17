<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>

<svelte:head>
    <title>Fire Lab | George Hotten</title>
</svelte:head>

<HeroTitle title="Fire Lab" subtitle="My home's fire lab" colour="#712e01" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h1>The Fire Lab</h1>
        <p class="gweb-link-black">
            With my interest in fire detection systems, I have started dabbling with my own setup of equipment dubbed 'the fire lab'. My main interest is <a href="https://buildings.honeywell.com/gb/en/brands/our-brands/gent">Honeywell GENT</a> systems.
        </p>

        <h2>Navigation</h2>
        <p>Please use the following to navigate this section of the site:</p>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li><a href="/fire/equipment">Equipment</a></li>
        </ul>
    </div>
</section>