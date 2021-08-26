<template>
  <div class="hamburger" :class="darkMode ? 'hamburger--dark' : ''">
    <span class="hamburger__box" @click="toggleMenu">
      <span class="hamburger__bar" :class="active ? 'hamburger__bar--active' : ''"></span>
    </span>
  </div>
  <div class="menu" :class="active ? 'menu--active' : ''">
    <nav class="menu__nav">
      <ul class="menu__list">
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/contact">contact</router-link>
        </li>
        <li>
          <router-link to="/faq">faq</router-link>
        </li>
      </ul>
      <span class="menu__line"></span>
      <ul class="menu__list">
        <li class="menu__location-link">Kalaupapa cliffs Hawaii</li>
        <li class="menu__location-link">Perito Moreno Glacier</li>
        <li class="menu__location-link">Banff National Park</li>
        <li class="menu__location-link">Cultural capital of Japan</li>
        <li class="menu__location-link">Luxor's Karnak Temple</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$store.getters.menuActive;
    },
    darkMode() {
      return this.$store.getters.detailsShown || this.$store.getters.pageShown;
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
    z-index: 10;
    cursor: pointer;
  }

  &--dark {
    .hamburger__bar {
      background-color: var(--color-dark);
    }
  }

  &__bar {
    width: 100%;
    background-color: #fff;

    &::before,
    &::after {
      @include hamburger-bars;
      background: inherit;

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
  transition: all 0.5s;
  overflow: hidden;
  z-index: 5;
  opacity: 0;

  &--active {
    opacity: 1;
    transform: translateX(-100%);
  }

  &__nav {
    padding: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }

  &__list {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    &:last-child {
      gap: 2.5rem;
    }
  }

  &__line {
    background: #e2e2e2;
    display: block;
    width: 100;
    height: 1px;
    border-radius: 1rem;
  }

  a,
  &__location-link {
    text-transform: uppercase;
    color: var(--color-dark);
  }

  a {
    font: 300 1.6rem 'Nunito', sans-serif;
    text-decoration: none;
  }

  .router-link-active {
    font-weight: 600;
  }

  &__location-link {
    font: 600 1.3rem 'Nunito', sans-serif;
  }
}
</style>
