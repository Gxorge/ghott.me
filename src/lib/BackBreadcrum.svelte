<script lang="ts">
    import '../app.scss';
    import { page } from '$app/stores';
</script>

{#if $page.url.pathname.startsWith("/projects/")}
    <nav>
        <p class="gweb-link-grey"><a href="/projects">&lt back</a></p>
    </nav>    
{:else if $page.url.pathname != "/"}
    <nav>
        <p class="gweb-link-grey"><a href="/">&lt home</a></p>
    </nav>    
{/if}


<style lang="scss">
    p {
        font-size: 15px;
    }
</style>