<template>
  <h1>app</h1>
  <dashboard :location="this.$store.getters.location"></dashboard>
  <button @click="test">change</button>
</template>

<script>
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  methods: {
    test() {
      this.$store.dispatch('changeLocation');
    },
  },
};
</script>

<style lang="sass">
*
  padding: 0
  margin: 0
  box-box-sizing: border-box
</style>
