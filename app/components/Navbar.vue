<template>
  <nav class="navbar">
    <div class="branding">
      <PrismicImage :field="slice.logo" class="logo" />
      <h2>
        <PrismicRichText :field="slice.site_name" />
      </h2>
    </div>

    <div class="links">
      <NuxtLink v-for="(link, i) in slice.navigation_links" :key="i" :to="linkMap[link.label] || '/'" class="nav-item"
        style="color: black">
        {{ link.label }}
      </NuxtLink>
    </div>

    <div class="actions">
      <button class="icon-btn">
        <i class="i-magnifying-glass"></i>
      </button>
      <PrismicLink :field="slice.sign_in_url" class="sign-in">
        Sign in
      </PrismicLink>
      <button class="icon-btn">
        <i class="i-hamburger-menu"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({ slice: Object })
const linkMap = {
  Home: '/#hero',
  Services: '/#services',
  Blog: '/#recent-blogs'
}
</script>
