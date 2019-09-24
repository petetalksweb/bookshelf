<template>
  <a :href="amazonLink" class="amazon-link">Buy on Amazon</a>
</template>

<script>
  export default {
    props: ["amazonLink"],
  };
</script>

<style lang="scss">
  .amazon-link {
    font-size: 1.5rem;
    padding: .5rem;
    color: inherit;
    border: .125rem solid #EDF5E1;
    border-radius: .25rem;
    margin-top: 25rem;
  }
</style>
