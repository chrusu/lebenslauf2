<template>
<div>
    <h2 >{{title}}</h2>
    <div v-for="(item, i) in items" :key="i">
      <hr v-if="i!==0" />
        <Station :item="item" />
    </div>
</div>
</template>

<script>
import Station from './Station.vue'

export default {
  name: 'StationList',
  components: {
    Station
  },
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
hr {
  border: 0.5px solid rgba(209,96,20, 0.5)
}
</style>