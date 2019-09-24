<template>
  <header class="review-header">
    <div class="container">
      <img :src="review.largeImage" />
      <div class="header-info">
        <Title :title="review.title" :subtitle="review.subtitle" />
        <Authors :authors="review.authors" />
        <Rating :rating="review.rating" />
        <Genres :genres="review.tags" />
        <AmazonLink :amazonLink="review.amazonLink" />
      </div>
    </div>
  </header>
</template>

<script>
  import Rating from "@/components/Rating";
  import Genres from "@/components/Genres";
  import AmazonLink from "@/components/AmazonLink";
  import Authors from "@/components/Authors";
  import Title from "@/components/Title";
  export default {
    components: {
      Rating,
      Genres,
      AmazonLink,
      Authors,
      Title
    },
    props: ["review"],
  };
</script>

<style lang="scss">
  .review-header {
    background-color: #5CDB95;
    min-width: 100%;
    .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      padding: 1rem 1rem 3rem;
      margin-top: -1rem;
      justify-items: center;
      align-items: center;
      @media(max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    }
    img {
      width: 100%;
      max-width: 250px;
      @media(max-width: 600px) {
        width: unset;
        max-height: 200px;
      }
    }
    .header-info {
      text-align: center;
      color: #EDF5E1;
      > * {
        margin-top: .5rem;
      }
      a {
        text-decoration: none;
      }
    }
  }
</style>
