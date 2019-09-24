<template>
  <g-link :to="review.path" class="book">
    <img class="cover" :src="review.largeImage" />
    <Rating :rating="review.rating" />
    <div class="title">{{ review.title }}</div>
    <div v-if="review.subtitle">{{ review.subtitle }}</div>
    <div class="authors">
      by
      <span v-for="(author, index) in review.authors">
        {{ author }}<span v-if="review.authors.length > 0 && index < review.authors.length - 2">, </span><span v-if="review.authors.length > 0 && index === review.authors.length - 2"> and </span>
      </span>
    </div>
  </g-link>
</template>

<script>
  import Rating from "@/components/Rating";
  export default {
    props: ["review"],
    components: {
      Rating
    },
  };
</script>
