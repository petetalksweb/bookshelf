import 'bookshelf.scss'

<template>
  <Layout>
    <main>
      <Bookshelf :reviews="$page.allReview.edges" />
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

<page-query>
  query {
    allReview {
      totalCount
      edges {
        node {
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
</page-query>
