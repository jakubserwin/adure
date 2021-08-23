<template>
  <div class="panel">
    <chevron-up @click="previousLocation"></chevron-up>
    <div class="circle" :class="active === 1 ? 'active' : ''" @click="exactLocation(0)"></div>
    <div class="circle" :class="active === 2 ? 'active' : ''" @click="exactLocation(1)"></div>
    <div class="circle" :class="active === 3 ? 'active' : ''" @click="exactLocation(2)"></div>
    <div class="circle" :class="active === 4 ? 'active' : ''" @click="exactLocation(3)"></div>
    <div class="circle" :class="active === 5 ? 'active' : ''" @click="exactLocation(4)"></div>
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
  position: absolute;
  top: 50%;
  left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transform: translateY(-50%);

  svg {
    fill: #fff;
    width: 1.6rem;
    height: 1.6rem;
    opacity: 0.5;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}

.circle {
  background: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  opacity: 0.5;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.active {
  opacity: 1;
}
</style>
