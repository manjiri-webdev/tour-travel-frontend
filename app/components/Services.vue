<template>
    <section class="services">
        <div class="heading">
            <h1>
                {{ slice.primary.services_title }}
            </h1>
            <p>
                {{ slice.primary.services_description }}
            </p>
        </div>
        <div class="cards">
            <div v-for="(card, i) in slice.primary.service_card" :key="i" class="card">
                <PrismicImage :field="card.image" class="card-image" />

                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>

                <div class="services-footer">
                    <p class="offer">{{ card.offer_text }}</p>
                    <PrismicLink :field="card.button_link" class="btn">
                        {{ card.button_text }}
                    </PrismicLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({ slice: Object })
</script>
