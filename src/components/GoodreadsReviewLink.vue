<template>
  <a :href="reviewLink" class="review-link">
    <em>
      From my review on Goodreads
    </em>
  </a>
</template>

<script>
  export default {
    props: ["reviewLink"],
  };
</script>

<style lang="scss">
  .review-link {
    margin: 2rem 0;
    text-align: right;
  }
</style>
