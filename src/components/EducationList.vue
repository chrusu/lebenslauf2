<template>
<div>
    <h2 >{{title}}</h2>
    <div v-for="(item, i) in items" :key="i">
        <Education :item="item" />
    </div>
</div>
</template>

<script>
import Education from './Education.vue'

export default {
  name: 'EducationList',
  components: {
    Education
  },
  props: {
    title: String,
    items: Array
  }
}
</script>

