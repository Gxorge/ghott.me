<script lang="ts">
    import '../gweb.scss';
    import { page } from '$app/stores';
</script>

{#if $page.url.pathname.startsWith("/projects/")}
    <nav>
        <p class="gweb-link-black"><a href="/projects">&lt back</a></p>
    </nav>
{:else if $page.url.pathname.startsWith("/fire/")}
<nav>
    <p class="gweb-link-black"><a href="/fire">&lt back</a></p>
</nav>    
{:else if $page.url.pathname != "/"}
    <nav>
        <p class="gweb-link-black"><a href="/">&lt home</a></p>
    </nav>    
{/if}

<style lang="scss">
    p {
        font-size: 15px;
    }
</style>