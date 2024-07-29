<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
    import { page }  from '$app/stores';
</script>    

<svelte:head>
    <title>Error {$page.status}</title>
    <meta content="Error {$page.status} | George Hotten" property="og:title" />
    <meta content="You have linked to a page that has thrown an error {$page.status}. Clicking will send you to the home page." property="og:description" />
    <meta content="https://george.hotten.uk/" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#821a1b">
</svelte:head>

<HeroTitle title="Oh snap" subtitle="Erorr code {$page.status}"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h1>This is awkward</h1>
        <p class="gweb-link-black">
            There was an error loading this page with the status code {$page.status}. If you believe this is a mistake, please get in touch with the contact details on my <a href="https://github.com/gxorge"  target="_blank" rel="noopener">GitHub</a>.
        </p>
    </div>
</section>