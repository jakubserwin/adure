<template>
  <div class="hamburger">
    <span class="hamburger__box" @click="toggleMenu">
      <span class="hamburger__bar" :class="active ? 'hamburger__bar--active' : ''"></span>
    </span>
  </div>
  <div class="menu" :class="active ? 'menu--active' : ''"></div>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$store.getters.menuActive;
    },
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu');
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin hamburger-bars {
  height: 0.3rem;
  position: absolute;
  background-color: #fff;
  border-radius: 5rem;
}

.hamburger {
  display: inline-block;
  padding: 0.75rem;

  &__box {
    width: 4rem;
    height: 1.5rem;
    display: inline-block;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  &__bar {
    width: 100%;

    &::before,
    &::after {
      @include hamburger-bars;

      content: '';
      right: 0;
      transition: all 0.3s ease-in-out;
    }

    &::after {
      top: 0.8rem;
      width: 3rem;
    }

    &::before {
      width: 100%;
    }

    &--active {
      transition: transform 0.3s ease-in-out;

      &::before {
        transform: translatey(0.4rem) rotate(45deg);
        background: var(--color-dark);
      }

      &::after {
        width: 100%;
        transform: translatey(-0.4rem) rotate(-45deg);
        background: var(--color-dark);
      }
    }
  }
}

.menu {
  background: #fff;
  width: 30%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
  transition: transform 0.5s;

  &--active {
    transform: translateX(-100%);
  }
}
</style>
