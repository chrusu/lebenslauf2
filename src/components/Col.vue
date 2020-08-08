<template>
    <div v-if="content.type === 'image'" :class="['column-'+content.cols, content.type]">
        <Carousel :images="content.images" :height="content.height" />
    </div>
    <div v-else-if="content.type === 'large-text'" :class="['column-'+content.cols, content.style, content.type]">
      <LargeText :title="content.title" :testimonials="content.testimonials" />
    </div>

    <div v-else-if="content.type === 'double-text'" :class="['column-'+content.cols, content.style, content.type]">
      <DoubleText :title="content.title" :text1="content.text1" :text2="content.text2" />
    </div>

    <div v-else-if="content.type === 'single-text'" :class="['column-'+content.cols, content.style, content.type]">
      <SingleText :title="content.title" :text="content.text" />
    </div>

    <div v-else-if="content.type === 'grid'" :class="['column-'+content.cols, content.style, content.type]">
      <Grid :left="content.left" :right="content.right" :title="content.title" />
    </div>
    <div v-else-if="content.type === 'name'" :class="['column-'+content.cols, content.style, content.type]">
      <Name :firstname="content.firstname" :lastname="content.lastname" :lead="content.lead" :text="content.text" />
    </div>

    <div v-else-if="content.type === 'progress-list'" :class="['column-'+content.cols, content.style, content.type]">
      <ProgressList :items="content.items" :title="content.title" />
    </div>

    <div v-else-if="content.type === 'stations'" :class="['column-'+content.cols, content.style, content.type]">
      <StationList :items="content.items" :title="content.title" />
    </div>

    <div v-else-if="content.type === 'skills'" :class="['column-'+content.cols, content.style, content.type]">
      <Skills :items="content.items" :title="content.title" />
    </div>

    <div v-else-if="content.type === 'portfolio'" :class="['column-'+content.cols, content.style, content.type]">
      <PortfolioList :items="content.items" :title="content.title" />
    </div>

</template>

<script>
import Carousel from './Carousel.vue'
import Grid from './Grid.vue'
import LargeText from './LargeText.vue'
import Name from './Name.vue'
import DoubleText from './DoubleText.vue'
import SingleText from './SingleText.vue'
import ProgressList from './ProgressList.vue'
import StationList from './StationList.vue'
import Skills from './Skills.vue'
import PortfolioList from './PortfolioList.vue'

export default {
  name: 'Col',
  components: {
    Carousel, Grid, LargeText, Name, DoubleText, ProgressList, StationList, SingleText, Skills, PortfolioList
  },
  props: {
    content: Object,
    cols: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
