<template>
  <ul class="genres">
    <li v-for="genre in genres" class="genre">
      <g-link :to="genre.path">{{ genre.title }}</g-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ["genres"],
  };
</script>

<style lang="scss">
  .genres {
    margin-bottom: 1rem;
    .genre {
      padding: .375rem;
      background-color: #379683;
      display: inline-block;
      font-size: 1rem;
      font-weight: normal;
      font-family: monospace;
      text-transform: uppercase;
      border-radius: .25rem;
      margin: 0 .5rem .5rem;
      a {
        color: unset;
      }
    }
  }
</style>
