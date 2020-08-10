<template>
<div>
          <h2 v-html="title">{{title}}</h2>

    <v-carousel
      :continuous="true"
      :show-arrows="false"
      hide-delimiter-background
      height="100%"
    >
      <v-carousel-item
        v-for="(testimonial, i) in testimonials"
        :key="i"
      >

        <div v-html="testimonial.text" class="large-text text">{{testimonial.text}}</div>
        <div v-html="testimonial.author" class="author">{{testimonial.author}}</div>
      </v-carousel-item>
    </v-carousel>
</div>
</template>

<script>
  export default {
    name: "LargeText",
    props: {    
        title: String,
        testimonials: Array
    }
  }
</script>

<style scoped>
.large-text {
  font-style: italic;
  font-weight: bold;
  color: var(--color-dark);
  margin-bottom: 20px;
}
.author {
  margin-bottom: 40px;
  float:right;
    color: var(--color-dark);
}
</style>