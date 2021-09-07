<template>
  <main
    :style="{
      background: 'url(' + require('@/assets/images/' + location.img + '.jpg') + ')',
    }"
  >
    <div class="container" v-touch:swipe="swipeHandler">
      <transition name="fade-out">
        <v-header v-if="!locationDetailsVisible"></v-header>
      </transition>
      <transition name="fade-out">
        <location></location>
      </transition>
      <transition name="fade-out">
        <v-footer v-if="!locationDetailsVisible"></v-footer>
      </transition>
      <control-panel :active="location.id" v-if="!locationDetailsVisible"></control-panel>
    </div>
    <div class="backdrop" :class="isMenuActive ? 'backdrop--active' : ''"></div>
  </main>
  <img class="load-img" :src="require('@/assets/images/hawaii.jpg')" />
  <img class="load-img" :src="require('@/assets/images/glacier.jpg')" />
  <img class="load-img" :src="require('@/assets/images/park.jpg')" />
  <img class="load-img" :src="require('@/assets/images/japan.jpg')" />
  <img class="load-img" :src="require('@/assets/images/karnak.jpg')" />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Location from './Location.vue';
import VHeader from '../UI/VHeader.vue';
import VFooter from '../UI/VFooter.vue';
import ControlPanel from '../ControlPanel.vue';

export default {
  components: {
    Location,
    VHeader,
    VFooter,
    ControlPanel,
  },
  setup() {
    const store = useStore();

    const location = computed(() => store.getters.location);

    const isMenuActive = computed(() => store.getters.menuActive);

    // prettier-ignore
    const locationDetailsVisible = computed(
      () => store.getters.detailsShown,
    );

    const swipeHandler = (direction) => {
      if (locationDetailsVisible.value || direction === 'bottom') return;
      if (direction === 'right') store.dispatch('previousLocation');
      if (direction === 'left') store.dispatch('nextLocation');
      if (direction === 'top') store.dispatch('toggleLocationDetails');
    };

    return {
      location,
      isMenuActive,
      locationDetailsVisible,
      swipeHandler,
    };
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
  transition: all 1.5s;
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

.load-img {
  height: 1px;
  width: 1px;
  position: absolute;
  top: 0;
  right: 100%;
  transform: scale(0);
}
</style>
