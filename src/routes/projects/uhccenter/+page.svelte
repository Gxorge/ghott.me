<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>UHC Center | George Hotten</title>
</svelte:head>

<HeroTitle title="UHC Center" subtitle="Fully custom Minecraft UHC Network" colour="#fe9e0e" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/UHC-Center">github.com/uhc-center</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            UHC Center was a fully custom-coded Minecraft UHC network created by me and <a href="https://lewisakura.moe" target="_blank" rel="noopener">Lewis</a>. It was eventually shutdown due to lack of time, however it successfully hosted many UHCs with players from <a href="https://hosts.uhc.gg" target="_blank" rel="noopener">hosts.uhc.gg</a>.
        </p>

        <h2>Releasing the Source Code</h2>
        <p class="gweb-link-black">
            Currently, not all of UHC Center's code is opened sourced. Once I have gone through all the code and checked for any sensitive information, the code will be made public on the GitHub organisation.
        </p>
    </div>
</section>