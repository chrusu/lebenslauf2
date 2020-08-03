<template>
    <div>
        <h2>{{title}}</h2>
        <div class="wrapper">
            <div v-for="(l, index) in left" v-bind:key="index" :class="['left_'+index]">{{l}}</div>
            <div v-for="(r, index) in right" v-bind:key="index" :class="['right_'+index]">{{r}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Grid",
    props: {
        title: String,
        left: Array,
        right: Array
    }
  }
</script>