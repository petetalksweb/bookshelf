import 'bookshelf.scss'

<template>
  <Layout>
    <main>
      <h1 class="genre-title">{{ $page.tag.title }} Book Reviews</h1>
      <Bookshelf :reviews="$page.tag.belongsTo.edges" />
    </main>
  </Layout>
</template>

<script>
  import Bookshelf from "@/components/Bookshelf";
  export default {
    components: {
      Bookshelf
    }
  };
</script>

<style lang="scss">
  h1.genre-title {
    text-transform: capitalize;
    text-align: center;
    font-size: 2rem;
  }
</style>

<page-query>
  query Tag ($id: String!) {
    tag (id: $id) {
      title
      belongsTo {
        edges {
          node {
            ...on Review {
              id
              title
              date (format: "D MMMM YYYY")
              path
              largeImage
              subtitle
              authors
              rating
            }
          }
        }
      }
    }
  }
</page-query>
