<template>
  <article class="blog-detail" v-if="blog">
    <div class="detail-cover">
      <img
        v-if="blog.data.cover_image?.url"
        :src="blog.data.cover_image.url"
        :alt="blog.data.cover_image.alt"
      />
    </div>

    <div class="detail-body">
      <h1>{{ blog.data.title[0]?.text }}</h1>

      <div class="author-detail">
        <div class="author-avatar-lg">
          <img
            v-if="blog.data.author_image?.url"
            :src="blog.data.author_image.url"
            :alt="blog.data.author_name"
          />
          <span v-else>{{ blog.data.author_name?.charAt(0) }}</span>
        </div>
        <div>
          <p class="author-name">{{ blog.data.author_name }}</p>
          <p class="publish-date">{{ blog.data.published_date }}</p>
        </div>
      </div>

      <blockquote v-if="blog.data.quote">
        {{ blog.data.quote }}
      </blockquote>

      <div class="blog-content">
        <PrismicRichText :field="blog.data.content" />
      </div>
    </div>
  </article>
</template>

<script setup>
const prismic = usePrismic()
const route = useRoute()

const { data } = await useAsyncData(`blog-${route.params.uid}`, () =>
  prismic.client.getByUID('blog', route.params.uid)
)

const blog = data.value
</script>