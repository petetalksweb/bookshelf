import 'main.scss'

<template>
  <div class="layout">
    <Header :metaData="$static.metaData" />
    <slot/>
    <Footer :metaData="$static.metaData" />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  export default {
    components: {
      Header,
      Footer
    }
  };
</script>
