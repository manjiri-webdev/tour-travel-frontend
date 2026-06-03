<template>
  <nav class="navbar">
    <div class="branding">
      <PrismicImage :field="slice.logo" class="logo" />
      <h2><PrismicRichText :field="slice.site_name" /></h2>
    </div>

    <div class="links">
      <PrismicLink
        v-for="(link, i) in slice.navigation_links"
        :key="i"
        :field="link.url"
        class="nav-item"
      >
        {{ link.label }}
      </PrismicLink>
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
</script>

