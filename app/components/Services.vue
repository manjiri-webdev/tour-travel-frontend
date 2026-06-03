<template>
  <section class="services">
    <h2>{{ slice?.primary?.section_title }}</h2>
    <ul>
      <li v-for="(item, i) in slice?.items" :key="i">
        <h3>{{ item.service_name }}</h3>
        <p>{{ item.service_description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({ slice: Object })
</script>
