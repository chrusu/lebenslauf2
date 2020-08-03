<template>
<div>
    <h2 >{{title}}</h2>
    <div v-for="(item, i) in items" :key="i">
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

