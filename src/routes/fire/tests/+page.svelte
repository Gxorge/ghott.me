<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>

<svelte:head>
    <title>System Tests 2024 | Fire Lab</title>
</svelte:head>

<HeroTitle title="Fire Lab: System Tests 2024" subtitle="Tests of the Fire Lab equipment" colour="#712e01" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>MCP and Two-stage Test - 18th July (GENT)</h2>
        <p>This was a test of the Manual Call Point and the two-stage alert/alarm system. The signal one alert stage was configured to last one minute before proceeding to signal two alarm. This test featured the following components:</p>
        <ul style="font-size: 20px;">
            <li>NANO-24 Control Panel (NANO-24)</li>
            <li>S4 Manual Call Point (S4-34805)</li>
            <li>S3 Voice Sounder / Red VAD (S3-V-VAD-HPR-R)</li>
            <li>S4 Dual Optical Heat Sensor / Voice Sounder (S4-711-V-VAD-LPR)</li>
        </ul>
        <iframe width="1280" height="720" title="Video of the MCP and Two-stage Test - 18th July"
        src="https://www.youtube.com/embed/ICve27tkMLE">
        </iframe> 
    </div>
</section>