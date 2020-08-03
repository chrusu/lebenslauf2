<template>
    <div>
        <h2 >{{title}}</h2>
        <div v-html="text" class="text">{{text}}</div>

    </div>
</template>

<script>
  export default {
    name: "DoubleText",
    props: {    
        title: String,
        text: String,
    }
  }
</script>

<style scoped>
.text1, .text2{
  position:relative;
  float:left;
  width: 100%;
  color: var(--color-neutral);
}
</style>