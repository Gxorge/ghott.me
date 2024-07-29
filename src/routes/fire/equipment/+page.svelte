<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>

<svelte:head>
    <title>Equipment | Fire Lab</title>
</svelte:head>

<HeroTitle title="Fire Lab: Equipment" subtitle="Equipment in the fire lab" colour="#712e01" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Active Equipment</h2>
        <p>
            The fire lab contains the current active equipment:
        </p>
        <ul style="font-size: 20px;">
            <li>GENT NANO-24 Control Panel - NANO-24 (x1)</li>
            <li>GENT S3 Voice Sounder / Red VAD / High Performance / Red Body - S3-V-VAD-HPR-R (x1)</li>
            <li>GENT S4 Manual Call Point (Resettable Plate) - S4-34805 (x1)</li>
            <li>GENT S4 Key Switch Interface (Single Channel) - (S4-34418) (x1)</li>
        </ul>

        <h2>Inventory Equipment</h2>
        <p>
            In inventory, I also have the following equipment:
        </p>
        <ul style="font-size: 20px;">
            <li>GENT S4 Dual Optical Heat Sensor / Voice Sounder / Red VAD / Standard Power - S4-711-V-VAD-LPR (x1)</li>
            <li>GENT S4 CO Dual Optical Heat Sensor - S4-901 (x1)</li>
            <li>GENT Vigilon Compact Loop Card EN - COMPACT-LPC-EN (x1)</li>
        </ul>

        <h2>Retired Equipment</h2>
        <p>
            The following items have been sold / returned:
        </p>
        <ul style="font-size: 20px;">
            <li>GENT Vigilon EN54 Loop Card - VIG-LPC-EN (returned as was the wrong card type)</li>
            <li>GENT Vigilon Compact Plus Panel - COMPACT-PLUS (returned as arrived damaged)</li>
        </ul>
    </div>
</section>