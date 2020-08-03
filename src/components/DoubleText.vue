<template>
    <div>
        <h2 >{{title}}</h2>
        <div v-html="text1" class="text1">{{text1}}</div>
        <div v-html="text2" class="text2">{{text2}}</div>

    </div>
</template>

<script>
  export default {
    name: "DoubleText",
    props: {    
        title: String,
        text1: String,
        text2: String
    }
  }
</script>

<style scoped>
.text1, .text2{
  position:relative;
  float:left;
  width: 50%;
  color: var(--color-neutral);
}
@media (max-width:768px){
  .text1, .text2{
    width:100%;
  }
}
</style>