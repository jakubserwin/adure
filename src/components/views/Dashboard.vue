<template>
  <main
    :style="{
      background: 'url(' + require('@/assets/images/' + location.img + '.jpg') + ')',
    }"
  >
    <!-- <div class="blur></div> -->
    <div class="container" v-touch:swipe="swipeHandler">
      <transition name="fade-out">
        <v-header v-if="!copomonentsVisible"></v-header>
      </transition>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
      <transition name="fade-out">
        <v-footer v-if="!copomonentsVisible"></v-footer>
      </transition>
      <control-panel :active="location.id" v-if="!copomonentsVisible"></control-panel>
    </div>
    <div class="backdrop" :class="isMenuActive ? 'backdrop--active' : ''"></div>
  </main>
</template>

<script>
import VHeader from '../UI/VHeader.vue';
import VFooter from '../UI/VFooter.vue';
import ControlPanel from '../ControlPanel.vue';

export default {
  computed: {
    location() {
      return this.$store.getters.location;
    },
    copomonentsVisible() {
      return this.$store.getters.detailsShown || this.$store.getters.pageShown;
    },
    isMenuActive() {
      return this.$store.getters.menuActive;
    },
  },
  components: {
    VHeader,
    VFooter,
    ControlPanel,
  },
  methods: {
    swipeHandler(direction) {
      if (this.copomonentsVisible || direction === 'bottom') return;
      if (direction === 'right') this.$store.dispatch('previousLocation');
      if (direction === 'left') this.$store.dispatch('nextLocation');
      if (direction === 'top') this.$store.dispatch('toggleLocationDetails');
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: calc(var(--full-height, 1vh) * 100);
  background-size: cover !important;
  background-position: center center !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // overflow: hidden;
  --blurAmount: 3px;
  transition: all 1.5s;
}

.blur {
  position: absolute;
  filter: blur(var(--blurAmount));
  top: calc(0 - var(--blurAmount) * 2);
  left: calc(0 - var(--blurAmount) * 2);
  width: calc(100% + var(--blurAmount) * 4);
  height: calc(100% + var(--blurAmount) * 4);

  // background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  // background-size: cover !important;
  // background-position: center center;

  z-index: -1;
}

.container {
  max-width: 150rem;
  width: 75%;
  max-height: 90rem;
  height: 80%;
  margin: 5rem;
  background-color: rgba(0, 0, 0, 0.45);
  box-shadow: 0 0 0 150rem rgba(0, 0, 0, 0.65), 0 0 5px 2px rgba(255, 255, 255, 0.35);
  border-radius: 4rem;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.5rem;

  position: relative;
  overflow: hidden;

  @media screen and (min-width: 93.75em) {
    padding: 5rem;
  }

  @media screen and (max-width: 75em) {
    width: 85%;
  }

  @media screen and (max-width: 36em) {
    margin: 3rem;
    padding: 3rem;
    max-height: none;
    height: calc(100% - 6rem);
    justify-content: flex-start;
  }

  // background-position: center center !important;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
  //   url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  // background-size: auto calc(100vh + var(--blurAmount) * 4) !important;
  // background-position: center center;
}

.backdrop {
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  backdrop-filter: blur(2.5px);

  &--active {
    display: block;
  }
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 1.5s;
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
}
</style>
