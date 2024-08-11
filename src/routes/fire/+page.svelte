<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>

<svelte:head>
    <title>Home | The Fire Lab</title>
    <meta content="Home | The Fire Lab" property="og:title" />
    <meta content="Documenting my passion for fire alarm and detection systems." property="og:description" />
    <meta content="https://george.hotten.uk/fire" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#712e01">
</svelte:head>

<HeroTitle title="The Fire Lab" subtitle="Documenting my passion for fire alarm and detection systems" colour="#712e01" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>About</h2>
        <p class="gweb-link-black">
            With my interest in fire detection systems, I have started dabbling with my own setup of equipment dubbed 'the fire lab'. My main interest is <a href="https://buildings.honeywell.com/gb/en/brands/our-brands/gent">Honeywell GENT</a> systems.
        </p>

        <h2>Navigation</h2>
        <p>Please use the following to navigate this section of the site:</p>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li><a href="/fire/equipment">Equipment</a></li>
            <li><a href="/fire/tests">2024 System Tests</a></li>
        </ul>
    </div>
</section>