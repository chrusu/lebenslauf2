<template>
    <div>
        <h2 >{{title}}</h2>
        <div v-html="text" class="text">{{text}}</div>

    </div>
</template>

<script>
  export default {
    name: "SingleText",
    props: {    
        title: String,
        text: String,
    }
  }
</script>

