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
          <div class="carousel-title">
            <p>{{image.alt}}</p>
          </div>
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
  height:100%;
  background-position:center;
  background-size: 120%;
  /*min-width:400px;*/
  min-height: 200px;
}

.carousel-title {
  position:absolute;
  bottom: 0px;
  width: 100%;
  height:100px;
  background-color: rgba(20,20,20,0.7);
  color: var(--color-neutral);
  text-align: center;
  font-size: 1.5rem;
  padding-top:0.5rem;
}
</style>