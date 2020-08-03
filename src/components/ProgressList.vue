<template>
<div>
            <h2 >{{title}}</h2>
    <div v-for="(item, i) in items" :key="i">
        <Progress :item="item" />
    </div>
</div>
</template>

<script>
import Progress from './Progress.vue'

export default {
  name: 'ProgressList',
  components: {
    Progress
  },
  props: {
    title: String,
    items: Array
  }
}
</script>

