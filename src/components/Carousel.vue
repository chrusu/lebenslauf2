<template>
<div>
  <div v-if="images.length > 1">
  <v-card
    elevation="24"
    class="mx-auto"
  >
  
    <v-carousel
      :continuous="true"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      :height="height"
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
      >
        <div class="bg-image" :style="['background-image:url(']+image.url+[');']" >
        </div>
      </v-carousel-item>
    </v-carousel>

  </v-card>
    </div>
    <div v-else>
    <div class="bg-image" :style="['height:']+height+['px;background-image:url(']+images[0].url+[');']" >
    </div>
    </div>
</div>
</template>

<script>
  export default {
    name: "Carousel",
    props: {
        images: Array,
        height: Number
    }
  }
</script>

<style scoped>
div {
  height:100%;
}

.cont .bg-image {
  width:100%;
  height:100%;
  background-position:center;
  background-size: 120%;
  min-width:400px;
  min-height: 200px;
}

</style>