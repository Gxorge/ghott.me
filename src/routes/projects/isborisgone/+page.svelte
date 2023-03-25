<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
</script>    

<svelte:head>
    <title>Is Boris Gone? | George Hotten</title>
</svelte:head>

<HeroTitle title="Is Boris Gone?" subtitle="Funny website to see if boris is gone yet" colour="rgba(113, 63, 18)" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <h3><b>/</b> Quick Links</h3>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/gxorge/isborisgone">github.com/gxorge/isborisgone</a></li>
            <li>Live Preview: <a href="https://isborisg.one">isborisg.one</a></li>
        </ul>

        <h3><b>/</b> About</h3>
        <p class="gweb-link-black">
            Is Boris Gone? is a website that me and my friends <a href="https://thomasr.me" target="_blank" rel="noopener">Thomas</a> and <a href="https://lewisakura.moe" target="_blank" rel="noopener">Lewis</a> created to know how long the former Prime Minister, Boris Johnson, had been in office for and if he had resigned. All of the data was pulled automatically from the government's official API. 
        </p>

        <img src="/isborisgone.jpg" alt="Is Boris Gone? website after he resigned." />
    </div>
</section>