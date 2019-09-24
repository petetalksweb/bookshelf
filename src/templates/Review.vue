<template>
  <Layout>
    <main class="review">
      <ReviewHeader :review="$page.review"/>
      <div class="container content">
        <p v-html="$page.review.content" />
        <GoodreadsReviewLink :reviewLink="$page.review.reviewLink" />
      </div>
    </main>
  </Layout>
</template>

<script>
  import ReviewHeader from "@/components/ReviewHeader";
  import GoodreadsReviewLink from "@/components/GoodreadsReviewLink";
  export default {
    components: {
      GoodreadsReviewLink,
      ReviewHeader
    },
  };
</script>

<page-query>
  query Review ($path: String!) {
    review: review (path: $path) {
      id
      title
      subtitle
      authors
      largeImage
      rating
      amazonLink
      tags {
        title
        id
        path
      }
      reviewLink
      content
      date (format: "D MMMM YYYY")
    }
  }
</page-query>

<style lang="scss">
  .review {
    .content {
      flex-direction: column;
      p {
        font-size: 1.25rem;
      }
    }
  }
</style>
