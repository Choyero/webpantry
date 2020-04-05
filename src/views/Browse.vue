<template>
  <div class="genre-wrapper">
    <div class="genre-item" v-for="elem in this.$root.$data.genres" :key="elem">
      <div class="genre-name"><h1>{{elem}}</h1></div>
      <PantryList :items="items(elem)" />
    </div>
  </div>
</template>


<script>
import PantryList from "../components/PantryList.vue";
export default {
  name: 'Genre-Browse',
  components: {
    PantryList
  },
  methods: {
    items(elem) {
      return this.$root.$data.items.filter(item => item.genre === elem.toLowerCase());
    },
  }
};
</script>

<style scoped>
.genre-item {
  margin-bottom: 100px;
}

.genre-name {
  background-color: rgba(0,0,0,0.8);
  color: #c5ecfd;
  text-align: center;
}
</style>
