<template>
  <section class="testimonials">
    <div class="heading">
      <h1><PrismicRichText :field="slice.primary.testimonial_section_title" /></h1>
    </div>

    <div class="cards">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="card">
        <PrismicImage :field="testimonial.data.author_image" class="author-img" />
        <h3>{{ testimonial.data.name }}</h3>
        <p class="designation">{{ testimonial.data.designation }}</p>
        <p class="review">“{{ testimonial.data.review }}”</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ slice: Object })

const prismic = usePrismic()

const { data: testimonials } = await useAsyncData('testimonials', () =>
  prismic.client.getAllByType('testimonial', {
    orderings: [{ field: 'my.testimonial.name', direction: 'asc' }],
    pageSize: 3 
  })
)
</script>

