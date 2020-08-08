<template>
<div>
  <h2 >{{title}}</h2>
  <div  class="skills">
    <div v-for="(item, i) in items" :key="i" class="skills-container">
      
      <div class="skill-set">
        <div class="skill-set-name">{{item.name}}</div>
        <div v-for="(skill, j) in item.skills" :key="j" class="skill-item">
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
  width:100%;
}

.skills {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  color: var(--color-neutral);
}

.skills-container {
  width:50%;
}

.skill-set-name {
  width:100%;
}


.skill-item {
  width:33%;
  text-align:center;
}


@media (max-width:768px){
  .skill-set {
    width:100%;
  }
  .skills-container {
  width:100%;
}
    .skill-item {
        padding-left: 0;
    }
}

@media (max-width:400px){
  .skill-set {
    width:100%;
  }
  .skills-container {
  width:100%;
}
    .skill-item {
        padding-left: 0;
        font-size: smaller;
    }
}
</style>