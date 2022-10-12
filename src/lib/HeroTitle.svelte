<script lang="ts">
    export let title: string;
    export let subtitle: string;
</script>

<section class="hero is-primary">
    <div class="hero-body">
        <p class="title hero-text-padding">
            <b>//</b><span class="hero-title-padding">{title}</span>
        </p>
        <p class="subtitle hero-text-padding">
            <b>/</b><span class="hero-subtitle-padding">{subtitle}</span>
        </p>
    </div>
</section>