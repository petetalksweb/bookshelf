<template>
  <div class="rating" :title="title">
    <span v-for="star in rating">&#9733;</span>
    <span v-for="emptyStar in 5 - rating">&#9734;</span>
  </div>
</template>

<script>
  const generateRatingTitle = (rating) => {
    switch(rating) {
      case 5: {
        return "5/5 - I LOVED it 😍";
      }
      case 4: {
        return "4/5 - I'd recommend it 😎"
      }
      case 3: {
        return "3/5 - I liked it 🙂"
      }
      case 2: {
        return "2/5 - It was ok... I guess 😐"
      }
      case 1: {
        return "1/5 - I somehow managed to finish it 😔"
      }
      default: {
        return "Apparently I don't know how I felt about it 🤨"
      }
    }
  }
  export default {
    props: ["rating"],
    data() {
      return {
        title: generateRatingTitle(this.rating),
      }
    },
  };
</script>

<style lang="scss">
  .rating {
    font-size: 1.25rem;
    letter-spacing: .25rem;
  }
</style>
