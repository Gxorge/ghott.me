<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
</script>    

<svelte:head>
    <title>George Hotten</title>
</svelte:head>

<HeroTitle title="George Hotten" subtitle="An aspiring Cyber Security student"/>
<section class="gweb-text-layout">
    <div class="content">
        <h1>Nice to meet you!</h1>
        <p>
            I'm a student from the UK studying a bachelor's degree in Cyber Security.
            I enjoy exploring new technology and I'm passionate about building and managing computer networks.
        </p>

        <h2>My Education</h2>
        <p>
            I have recieved the following IT-releated qualifications:
        </p>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>BTEC National Extended Diploma in IT at <a href="https://solihull.ghott.me">Solihull College</a> - <b>D*D*D*</b></li>
            <li>GCSE Computer Science at Light Hall School - <b>9 (A*)</b></li>
        </ul>

        <p>
            And I'm working towards the following qualifications:
        </p>
        <ul class="gweb-link-black" style="font-size: 20px;">
            <li>Bachelor's Degree in Cyber Security at <a href="https://aston.ghott.me">Aston University</a></li>
        </ul>

        <h2>My Work</h2>
        <p class="gweb-link-black">
            Interested in what I've done? Here you can find a list of <a href="/projects">projects I may or may not have completed!</a>
        </p>
    </div>
</section>
