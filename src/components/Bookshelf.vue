import 'bookshelf.scss'

<template>
  <Layout>
    <section class="bookshelf">
      <ReviewLink v-for="edge in reviews" :key="edge.node.id" :review="edge.node" />
    </section>
  </Layout>
</template>

<script>
  import ReviewLink from "@/components/ReviewLink";
  export default {
    components: {
      ReviewLink
    },
    props: ["reviews"],
  };
</script>

<style lang="scss">
  $margin-bottom: .5rem;

  .bookshelf {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    margin: 1rem;
    & .book {
      color: black;
      text-decoration: none;
      text-align: center;
      transition: transform .2s;
      &:hover, &:focus {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(1);
      }
      & .cover {
        object-fit: contain;
        max-width: 100%;
        margin-bottom: $margin-bottom;
      }
      & .review {
        margin-bottom: $margin-bottom;
        &.perfect {
          color: gold;
        }
      }
      & .title {
        font-size: 1rem;
        font-weight: bolder;
      }
      & .subtitle {
        font-size: .9rem;
        font-weight: bold;
      }
      & .authors {
        font-size: .9rem;
        font-style: italic;
      }
    }
  }
</style>
