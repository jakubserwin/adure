<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap');

:root {
  --color-dark: #0a0a0c;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

.desc {
  font: 400 1.6rem / 150% 'Nunito', sans-serif;
}
</style>
