<template>
  <footer class="site-footer">
    <div class="container">
      <g-link class="site-name" to="/">{{ metaData.siteName }}</g-link>
      <span>
        All review information from <a href="https://www.goodreads.com/user/show/76962828-jacob-petersen">my Goodreads profile</a>
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ["metaData"],
  };
</script>

<style lang="scss">
  .site-footer {
    display: flex;
    min-width: 100%;
    color: #edf5e1;
    background-color: #5CDB95;
    position: absolute;
    bottom: 0;
    .container {
      justify-content: space-between;
      align-items: center;
      @media(max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
    }
    a {
      color: unset;
    }
    .site-name {
      font-size: 1.5rem;
      text-decoration: none;
      @media(max-width: 600px) {
        margin-bottom: .5rem;
      }
    }
    .site-info {
      display: flex;
      align-self: flex-end;
      font-size: 1rem;
    }
  }
</style>
