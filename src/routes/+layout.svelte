<script lang="ts">
    import '../app.scss';

    let mobileMenuActive = false;
</script>

<nav class="navbar is-dark" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <b>//</b>&nbsp; George Hotten
        </a>

        <a role="button" href="#" class="navbar-burger {mobileMenuActive ? "is-active" : ""}" aria-label="menu" aria-expanded="false" on:click={() => {mobileMenuActive = !mobileMenuActive;}}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu {mobileMenuActive ? "is-active" : ""}">
        <div class="navbar-end" style="padding-right: 400px">
            <a class="navbar-item" href="/">
                <b>/</b>&nbsp; Home
            </a>

            <a class="navbar-item" href="/">
                <b>/</b>&nbsp; Projects
            </a>
        </div>
    </div>
</nav>

<main class="gweb-content">
    <slot />
</main>

<footer class="footer footer-sticky">
    <div class="content gweb-text-layout footer-text">
        <p style="font-size: 20px;"><b>© George Hotten 2022</b></p>
        <p style="font-size: 15px;"><a href="https://github.com/gxorge/gweb3" target="_blank" rel="noopener">Check out the source code</p>
    </div>
</footer>

<style lanbg="scss">
    .navbar-brand {
        color: white;
    }
</style>