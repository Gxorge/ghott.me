<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
</script>    

<svelte:head>
    <title>George Hotten</title>
    <meta content="George Hotten" property="og:title" />
    <meta content="George's personal website, find out about my education, projects, and more." property="og:description" />
    <meta content="https://george.hotten.uk" property="og:url" />
    <meta content="https://george.hotten.uk/favicon.png" property="og:image" />
    <meta name="theme-color" content="#821a1b">
</svelte:head>

<HeroTitle title="George Hotten" subtitle="An aspiring cybersecurity professional"/>
<section class="gweb-text-layout">
    <div class="content">
        <p>
            I'm a student from the UK studying a bachelor's degree in Cybersecurity.
            I enjoy exploring new technology and I'm passionate about building and managing computer networks.
        </p>

        <h2>My Education</h2>
        <p>
            I have recieved the following IT-releated qualifications:
        </p>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>BTEC National Extended Diploma in IT at <a href="https://solihull.georgehotten.uk">Solihull College</a> - <b>D*D*D*</b></li>
            <li>GCSE Computer Science at Light Hall School - <b>9 (A*)</b></li>
        </ul>

        <p>
            And I'm working towards the following qualifications:
        </p>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Bachelor's Degree in Cybersecurity at <a href="https://aston.georgehotten.uk">Aston University</a></li>
        </ul>

        <h2>My Work</h2>
        <p class="gweb-link-black">
            Interested in what I've done? Here you can find a list of <a href="/projects">projects I may or may not have completed!</a>
        </p>

        <h2>The Fire Lab</h2>
        <p class="gweb-link-black">
            Check out my interest in fire detection equipment at <a href="/fire">the fire lab.</a>
        </p>
    </div>
</section>
