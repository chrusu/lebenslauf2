<template>
<div>
  <h2 >{{title}}</h2>
  <div  class="skills">
    <div v-for="(item, i) in items" :key="i">
      <div class="skill-set-name">{{item.name}}</div>
      <div class="skill-set">
        <div v-for="(skill, j) in item.skills" :key="j">
          <Skill :skill="skill" />
        </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import Skill from './Skill'

export default {
  name: 'SkillList',
  components: {
    Skill
  },
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
.skill-set {
  position: relative;
  display:flex;
  flex-wrap: wrap;
}

.skills {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.skill-set-name {

}
</style>