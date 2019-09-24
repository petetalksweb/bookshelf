<template>
  <h1 class="title">
    {{ title }}
    <small v-if="subtitle" class="subtitle">
      {{ subtitle }}
    </small>
  </h1>
</template>

<script>
  export default {
    props: ["title", "subtitle"],
  };
</script>

<style lang="scss">
  .title {
    font-size: 3rem;
    font-weight: bold;
    padding: 0 1rem;
    @media(max-width: 600px) {
      font-size: 2.5rem;
    }
    .subtitle {
      font-size: 2rem;
      display: block;
    }
  }
</style>
