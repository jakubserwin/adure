<template>
  <dashboard></dashboard>
</template>

<script>
import { onBeforeMount } from 'vue';
import Dashboard from './components/views/Dashboard.vue';

export default {
  components: { Dashboard },
  setup() {
    onBeforeMount(() => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--full-height', `${vh}px`);
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap');

:root {
  --color-primary: #61e786;
  --color-dark: #0a0a0c;
  --color-white: #fafafa;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

.desc {
  font: 400 1.6rem / 150% 'Nunito', sans-serif;

  @media screen and (max-width: 70em) {
    font-size: 1.5rem;
  }
}

.animate {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: all 0.5s;
}

.fade-out-enter-to,
.fade-out-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
