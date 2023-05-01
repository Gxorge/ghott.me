<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
</script>    

<svelte:head>
    <title>Bubbletill | George Hotten</title>
</svelte:head>

<HeroTitle title="Bubbletill" subtitle="A WIP EPoS Retail Solution" colour="#004494" text_colour="white"/>
<section class="gweb-text-layout">
    <div class="content">
        <BackBreadcrum/>
        <h2>Quick Links</h2>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Source Code: <a href="https://github.com/bubbletill">github.com/bubbletill</a></li>
        </ul>

        <h2>About</h2>
        <p>
            Bubbletill is a EPoS solution that aims to bring all a store's PoS needs into one suite of applications. Bubbletill's front-end applications are predominantly made in Java whilst the backend uses Python.
            <br><br>
            Bubbletill currently has 4 components, with more on the way:
        </p>
        <ul class="gweb-link-subtle" style="font-size: 20px;">
            <li><b>Point of Sale</b> - The application that members of staff interact with to complete sales.</li>
            <li><b>Back Office</b> -  The application that members of management interact with to view analytics, manage user accounts, view transactions and more. This application can be found on the POS devices and launched through the POS application.</li>
            <li><b>Backend</b> -  Flask server running on the controller in each store, handing API requests.</li>
            <li><b>Shell</b> - C# application to replace Windows Explorer on the POS devices.</li>
        </ul>

        <img src="/bubbletill.png" alt="Bubbletill POS sale screen." />
    </div>
</section>