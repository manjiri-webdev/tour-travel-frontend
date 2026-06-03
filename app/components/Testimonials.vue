<template>
  <section class="testimonials">
    <h2>{{ slice?.primary?.section_title }}</h2>
    <div v-for="(item, i) in slice?.items" :key="i" class="testimonial">
      <blockquote>{{ item.review }}</blockquote>
      <p><strong>{{ item.name }}</strong>, {{ item.designation }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({ slice: Object })
</script>
