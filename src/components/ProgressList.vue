<template>
<div>
            <h2 >{{title}}</h2>
    <div v-for="(item, i) in items" :key="i" class="progress-item">
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

<style scoped>
.progress-list{
  display: flex;
  flex-wrap:wrap;
}
.progress-item {
    width:25%;
    text-align:center;
    display: inline-block;
    height:150px;
}

@media (max-width:768px){
.progress-item {
    float:left;
    width:50%;
    padding-left: 10%;
}
}
</style>