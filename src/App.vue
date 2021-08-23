<template>
  <dashboard :location="this.$store.getters.location"></dashboard>
  <!-- <button @click="test">change</button> -->
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
  beforeMount() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--full-height', `${vh}px`);
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
</style>
