<script lang="ts">
    import '../app.scss';
</script>

<main>
    <nav class="navbar is-dark" aria-label="main navigation">
        <div class="navbar-brand" style="padding-left: 340px">
            <a class="navbar-item" href="/">
                <b>//</b>&zwnj; George Hotten
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end" style="padding-right: 400px">
                <a class="navbar-item" href="/">
                    <b>/</b>&zwnj; Home
                </a>

                <a class="navbar-item" href="/">
                    <b>/</b>&zwnj; Projects
                </a>
            </div>
        </div>
    </nav>
    <container class="gweb-layout">
        <slot />
    </container>
</main>

<style lanbg="scss">
    .navbar-brand {
        color: white;
    }
</style>