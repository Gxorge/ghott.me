<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>West Midlands Railway PIS Emulator | George Hotten</title>
    <meta content="West Midlands Railway PIS Emulator | George Hotten" property="og:title" />
    <meta content="Making my life easier at TK Maxx." property="og:description" />
    <meta content="https://george.hotten.uk/tkmpuller" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#004494">
</svelte:head>

<HeroTitle title="West Midlands Railway PIS Emulator" subtitle="Because who doesn't want to imagine they're on a train?" colour="#FF8201" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/gxorge/wmr-pis">github.com/gxorge/wmr-pis</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            A remake of the West Midlands Railway passenger-information-system used on their Class 172 fleet. 
            <br><br>
            Another weird one. Not sure why I made this but I did! This polls data from <a href="https://realtimetrains.co.uk/">Realtime Trains</a> and then, depending on where a train is, display the appropriate messages and plays the appropriate audio.
        </p>

        <img src="/wmrpis.png" alt="The display for a train for Dorrige, currently at Birmingham Moor Sreet." />
    </div>
</section>