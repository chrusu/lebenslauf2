<template>
    <div class='skill-item'>
      <div class="skill-image"><img :src="item.image" :alt="item.name"></div>
      <div class="skill-name">{{item.name}}</div>
    </div>
</template>

<script>
export default {
   name: 'skill',
  props: {
    item: Array
  }
}
</script>

<style scoped>
.skill-item {
    float:left;
    width:25%;
    padding-left: 10%;
}
.skill-name {
    margin-top: 1rem;
}

.skill-image{
    margin-top: 1rem;
    width:40%;
}

@media (max-width:768px){
.skill-item {
    float:left;
    width:50%;
    padding-left: 10%;
}
}
</style>