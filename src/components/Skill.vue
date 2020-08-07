<template>
    <div>
      <div class="skill-image"><img :src="skill.image" :alt="skill.name"></div>
      <div class="skill-name" v-html="skill.name">{{skill.name}}</div>
    </div>
</template>

<script>
export default {
   name: 'Skill',
  props: {
    skill: Array
  }
}
</script>

<style scoped>

.skill-name {
    margin-top: 1rem;
}

.skill-image{
    margin-top: 1rem;
    height:100%;
}
.skill-image img {
    height:102px;
}


@media (max-width:400px){
.skill-image img {
    height:70px;
}
}
</style>    