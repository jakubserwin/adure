<template>
  <div class="panel panel--vertical" v-if="mode === 'vertical'">
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
  <div class="panel panel--horizontal" v-else>
    <chevron-left></chevron-left>
    <div
      class="circle"
      v-for="n in this.$store.getters.locationsLength"
      :key="n"
      :class="active === n ? 'active' : ''"
      @click="exactLocation(n - 1)"
    ></div>
    <chevron-right></chevron-right>
  </div>
</template>

<script>
// eslint-disable-next-line
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'mdue';

export default {
  props: {
    active: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
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
    ChevronLeft,
    ChevronRight,
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &--vertical {
    position: absolute;
    top: 50%;
    left: 3rem;
    flex-direction: column;
    transform: translateY(-50%);

    .circle {
      opacity: 0.5;
      background: #fff;
      opacity: 0.5;
    }

    svg {
      fill: #fff;
    }
  }

  &--horizontal {
    .circle {
      opacity: 0.15;
      background: var(--color-dark);
    }

    svg {
      fill: var(--color-dark);
      opacity: 1;
    }
  }

  svg {
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
