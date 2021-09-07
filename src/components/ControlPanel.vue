<template>
  <div class="panel">
    <chevron-up @click="previousLocation"></chevron-up>
    <div
      class="circle"
      v-for="n in this.$store.getters.locationsLength"
      :key="n"
      :class="active === n ? 'active' : ''"
      @click="exactLocation(n - 1)"
    ></div>
    <chevron-down @click="nextLocation"></chevron-down>
  </div>
</template>

<script>
import { ChevronUp, ChevronDown } from 'mdue';
import { useStore } from 'vuex';

export default {
  props: {
    active: {
      type: Number,
      required: true,
    },
  },
  components: {
    ChevronUp,
    ChevronDown,
  },
  setup() {
    const store = useStore();
    const nextLocation = () => store.dispatch('nextLocation');
    const previousLocation = () => store.dispatch('previousLocation');
    const exactLocation = (id) => store.dispatch('exactLocation', id);

    return { nextLocation, previousLocation, exactLocation };
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: absolute;
  top: 50%;
  left: 3rem;
  flex-direction: column;
  transform: translateY(-50%);

  @media screen and (min-width: 93.75em) {
    left: 5rem;
  }

  @media screen and (max-width: 70em) {
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    bottom: 3.5rem;

    flex-direction: row;
  }

  svg {
    fill: #fff;

    width: 1.6rem;
    height: 1.6rem;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    @media screen and (max-width: 70em) {
      transform: rotate(-90deg);
    }
  }
}

.circle {
  background: #fff;
  opacity: 0.5;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.active {
  opacity: 1 !important;
  pointer-events: none;
}
</style>
