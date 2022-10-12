<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import { page }  from '$app/stores';
</script>    

<HeroTitle title="Uh oh" subtitle="Erorr code {$page.status}."/>