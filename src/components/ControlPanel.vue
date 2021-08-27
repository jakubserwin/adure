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

export default {
  props: {
    active: {
      type: Number,
      required: true,
    },
  },
  methods: {
    nextLocation() {
      this.$store.dispatch('nextLocation');
    },
    previousLocation() {
      this.$store.dispatch('previousLocation');
    },
    exactLocation(id) {
      this.$store.dispatch('exactLocation', id);
    },
  },
  components: {
    ChevronUp,
    ChevronDown,
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

  @media screen and (min-width: 1500px) {
    left: 5rem;
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
}
</style>
