<template>
    <section class="hero" :style="{
        backgroundImage: slice.primary.hero_background_image
            ? `url(${slice.primary.hero_background_image.url})`
            : ''
    }">
        <div class="overlay">
            <h1><PrismicRichText :field="slice.primary.hero_title" /></h1>
            <button class="cta">
                <PrismicLink :field="slice.primary.hero_button_link" class="btnlink">
                    {{ slice.primary.hero_button_text }}
                </PrismicLink>
            </button>
        </div>
    </section>
</template>

<script setup>
defineProps({ slice: Object })
</script>
