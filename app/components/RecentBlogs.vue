<template>
  <section id="recent-blogs" class="recent-blogs">
    <div class="heading">
      <h1>{{ slice.primary.recent_blog_title }}</h1>
      <p>{{ slice.primary.recent_blog_description }}</p>

      <NuxtLink to="/blog" class="view-all-btn">
        View All
      </NuxtLink>
    </div>

    <div class="blogs-cards">
      <div v-for="blog in blogs" :key="blog.id" class="blog-card">
        <PrismicImage :field="blog.data.cover_image" class="card-image" />

        <h3>
          <PrismicRichText :field="blog.data.title" />
        </h3>
        <p>{{ blog.data.quote }}</p>

        <div class="blog-footer">
          <div class="author">
            <PrismicImage :field="blog.data.author_image" class="author-img" />
            <span>{{ blog.data.author_name }}</span>
          </div>
          <span class="date">{{ blog.data.published_date }}</span>

          <NuxtLink :to="`/blog/${blog.uid}`" class="btn">
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ slice: Object })

const prismic = usePrismic()

const { data: blogs } = await useAsyncData('blogs', () =>
  prismic.client.getAllByType('blog', {
    orderings: [{ field: 'my.blog.published_date', direction: 'desc' }],
    pageSize: 3
  })
)
</script>
