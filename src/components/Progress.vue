<template>
    <div class="alignment">
        <v-progress-circular
        size="80"
        :value="item.value"
        color="light-blue"
      >{{ item.value }}</v-progress-circular>
      <div class="progress-image"><div stlye="display:inline-block"><img :src="item.image" :alt="item.name"></div><div class="progress-name">{{item.name}}</div></div>
      
    </div>
</template>

<script>
export default {
   name: 'Progress',
  props: {
    item: Object
  }
}
</script>

<style scoped>

.progress-name {
    display: inline-block;
}

.progress-image{
    margin-top: 1rem;
    width:100%;
    text-align:center;
}

.progress-image img{
    width:50px;
}

.alignment {
    text-align: center;
}
</style>