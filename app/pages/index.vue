<script setup lang="ts">
import { components } from '../../slices'

const prismic = usePrismic()
const { data: homepage } = await useAsyncData('homepage', () =>
  prismic.client.getSingle('homepage')
)
</script>

<template>
  <main>
    <SliceZone :slices="homepage?.data.slices ?? []" :components="components" />
  </main>
</template>
