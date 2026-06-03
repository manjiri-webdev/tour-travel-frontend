<script setup>
import Navbar from '../components/Navbar.vue'
import NavFooter from '../components/NavFooter.vue'

const prismic = usePrismic()

// Fetch nav_and_footer single type
const { data: navFooter } = await useAsyncData('navFooter', () =>
  prismic.client.getSingle('nav_and_footer')
)
</script>

<template>
  <div>
    <Navbar v-if="navFooter?.data" :slice="navFooter.data" />

    <main>
      <slot />
    </main>

    <NavFooter v-if="navFooter?.data" :slice="navFooter.data" />
  </div>
</template>
