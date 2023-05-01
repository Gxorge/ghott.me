<script lang="ts">
    import '$lib/HeroTitle.scss';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>

<svelte:head>
    <title>TheHerobrine! | George Hotten</title>
</svelte:head>

<header class="hero" style="background-color: rgb(0, 0, 0)">
    <div class="hero-body hero-text-padding ">
        <h1 class="title thb-hero-title">
            The<b>Herobrine!</b>
        </h1>
        <h2 role="doc-subtitle" class="subtitle thb-hero-subtitle">
            Remake from The Hive
        </h2>
    </div>
</header>

<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/gxorge/theherobrine-og">github.com/gxorge/theherobrine-og</a></li>
        </ul>

        <h2>About</h2>
        <p class="gweb-link-black">
            The Herobrine! is my remake of an old Hive MC's game-mode that was removed in Java 2. Lobbies contain 13 people, one person of which will become The Herobrine. The Herobrine starts off invisible, but can be seen by a cloud of smoke. It is the survivor's task to collect shards to weaken The Herobrine, and eventually make him visible. The Herobrine must kill all the survivors using his special abilities before the survivors kill him first.
            <br><br>
            The Herobrine is currently being maintained for the <a href="https://trueog.net">TrueOG</a> network, and can be played there too.
        </p>

        
        <img src="/thb-1.png" alt="The Herobrine gameplay with a survivor about to capture a shard." />
    </div>
</section>

<style lang="scss">
    .thb-hero-title {
        color: rgb(255, 85, 85);
    }

    .thb-hero-subtitle {
        color: rgb(255, 255, 255);
    }
</style>