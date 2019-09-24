<template>
  <div class="authors">
    by
    <span v-for="(author, index) in authors">
      {{ author }}<span v-if="authors.length > 0 && index < authors.length - 2">, </span><span v-if="authors.length > 0 && index === authors.length - 2"> and </span>
    </span>
  </div>
</template>

<script>
  export default {
    props: ["authors"],
  };
</script>

<style lang="scss">
  .authors {
    font-size: 1.5rem;
    font-style: italic;
  }
</style>
