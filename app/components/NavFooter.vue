<template>
  <footer class="footer">
    <div class="footer-nav">
      <NuxtLink v-for="(link, i) in slice.navigation_links" :key="i" :to="linkMap[link.label] || '/'" class="nav-item">
        {{ link.label }}
      </NuxtLink>
    </div>

    <div class="social">
      <PrismicLink v-for="(social, i) in slice.social_links" :key="i" :field="social.url" class="social-item">
        <PrismicImage :field="social.icon" class="icon" />
      </PrismicLink>
    </div>

    <div class="newsletter">
      <h3>
        <PrismicRichText :field="slice.footer_title" />
      </h3>
      <p>{{ slice.footer_description }}</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter Your Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({ slice: Object })
const linkMap = {
  Home: '/#hero',
  Services: '/#services',
  Blog: '/#recent-blogs'
}
</script>
