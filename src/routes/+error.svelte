<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
    import { page }  from '$app/stores';
</script>    

<HeroTitle title="Something has gone wrong" subtitle="Erorr code {$page.status}"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <br>
        <p class="gweb-link-black">
            There was an error loading this page with the status code {$page.status}. If you believe this is a mistake, <a href="mailto:hello@hottentechnology.com">please get in touch.</a>
        </p>
    </div>
</section>