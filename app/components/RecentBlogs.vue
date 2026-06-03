<template>
  <section class="recent-blogs">
    <h2>{{ slice?.primary?.section_title }}</h2>
    <div v-for="(item, i) in slice?.items" :key="i" class="blog-card">
      <h3>{{ item.blog_title }}</h3>
      <p>{{ item.blog_excerpt }}</p>
      <NuxtLink :to="item.blog_link?.url">Read more</NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({ slice: Object })
</script>
