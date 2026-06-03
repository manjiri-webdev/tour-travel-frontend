<template>
  <section class="blogs">
    <div class="blogs-header">
      <h2>Our Blogs</h2>
      <p>Stories, insights & travel guides</p>
    </div>
    <div class="blog-grid">
      <NuxtLink
        v-for="(blog, index) in blogs"
        :key="blog.uid"
        :to="`/blog/${blog.uid}`"
        class="blog-card"
        :class="`card-color-${(index % 3) + 1}`"
      >
        <div class="card-img-placeholder">
          <img
            v-if="blog.data.cover_image?.url"
            :src="blog.data.cover_image.url"
            :alt="blog.data.cover_image.alt || blog.data.title[0]?.text"
          />
        </div>
        <div class="card-body">
          <h3>{{ blog.data.title[0]?.text }}</h3>
          <div class="author-row">
            <div class="author-avatar">
              {{ blog.data.author_name?.charAt(0) }}
            </div>
            <span>{{ blog.data.author_name }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const prismic = usePrismic()

const { data } = await useAsyncData('blogs', () =>
  prismic.client.getAllByType('blog')
)

const blogs = data.value
</script>