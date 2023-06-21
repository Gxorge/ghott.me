<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Bubbletill | George Hotten</title>
</svelte:head>

<HeroTitle title="Bubbletill" subtitle="An all-in-one retail solution" colour="#004494" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/bubbletill">github.com/bubbletill</a></li>
        </ul>

        <h2>About</h2>
        <p>
            Bubbletill is an all-in-one solution that aims to bring all a store's point of sale needs into one suite of applications. Bubbletill's applications are created with .NET Core 6.
            <br><br>
            Bubbletill currently has 3 components, with more on the way:
        </p>
        <ul class="gweb-link-subtle" style="font-size: 20px;">
            <li><b>Point of Sale</b> - The application that members of staff interact with to complete sales.</li>
            <li><b>Controller API</b> -  API for interfacing with the controller's database and services.</li>
            <li><b>Shell</b> - Application to replace Windows Explorer on the POS devices.</li>
        </ul>

        <img src="/bubbletill.png" alt="Bubbletill POS sale screen." />
    </div>
</section>