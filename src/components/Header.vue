<template>
  <header class="site-header">
    <div class="container">
      <g-link class="site-name" to="/">{{ metaData.siteName }}</g-link>
      <nav class="site-navigation">
        <g-link to="/about">About</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    props: ["metaData"],
  };
</script>

<style lang="scss">
  .site-header {
    display: flex;
    position: fixed;
    top: 0;
    min-width: 100%;
    color: #edf5e1;
    background-color: #5CDB95;
    .container {
      justify-content: space-between;
    }
    a {
      text-decoration: none;
      color: unset;
    }
    .site-name {
      font-size: 2rem;
    }
    .site-navigation {
      display: flex;
      align-self: flex-end;
      font-size: 1.5rem;
    }
  }
</style>
