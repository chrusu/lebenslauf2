<template>
    <div class='progress-item'>
        <v-progress-circular
        size="80"
        :value="item.value"
        color="light-blue"
      >{{ item.value }}</v-progress-circular>
      <div class="progress-image"><img :src="item.image" :alt="item.name"></div>
      <div class="progress-name">{{item.name}}</div>
    </div>
</template>

<script>
export default {
   name: 'Progress',
  props: {
    item: Array
  }
}
</script>

<style scoped>
.progress-item {
    float:left;
    width:25%;
    padding-left: 10%;
}
.progress-name {
    margin-top: 1rem;
}

.progress-image{
    margin-top: 1rem;
    width:40%;
}

@media (max-width:768px){
.progress-item {
    float:left;
    width:50%;
    padding-left: 10%;
}
}
</style>