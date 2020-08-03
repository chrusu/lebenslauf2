<template>
    <div class='skill-item'>
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
.skill-item {
    text-align:center;
    padding:0 1.2rem;
}
.skill-name {
    margin-top: 1rem;
}

.skill-image{
    margin-top: 1rem;
}
.skill-image img {
    height:102px;
}

@media (max-width:768px){
    .skill-item {
        width:50%;
        padding-left: 10%;
    }
}
</style>    