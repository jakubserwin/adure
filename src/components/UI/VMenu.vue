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
          <router-link to="/" @click="toggleMenu">home</router-link>
        </li>
        <li>
          <router-link to="/about" @click="toggleMenu">about</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="toggleMenu">contact</router-link>
        </li>
      </ul>
      <span class="menu__line"></span>
      <ul class="menu__list">
        <li
          class="menu__location-link"
          @click="
            toggleMenu();
            exactLocation(0);
          "
        >
          Kalaupapa cliffs Hawaii
        </li>
        <li
          class="menu__location-link"
          @click="
            toggleMenu();
            exactLocation(1);
          "
        >
          Perito Moreno Glacier
        </li>
        <li
          class="menu__location-link"
          @click="
            toggleMenu();
            exactLocation(2);
          "
        >
          Banff National Park
        </li>
        <li
          class="menu__location-link"
          @click="
            toggleMenu();
            exactLocation(3);
          "
        >
          Cultural capital of Japan
        </li>
        <li
          class="menu__location-link"
          @click="
            toggleMenu();
            exactLocation(4);
          "
        >
          Luxor's Karnak Temple
        </li>
      </ul>
      <div class="menu__socials">
        <a href="#">
          <twitter></twitter>
        </a>
        <a href="#">
          <instagram></instagram>
        </a>
        <a href="#">
          <facebook></facebook>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import { Twitter, Instagram, Facebook } from 'mdue';

export default {
  computed: {
    active() {
      return this.$store.getters.menuActive;
    },
    darkMode() {
      return this.$store.getters.detailsShown || this.$store.getters.pageShown;
    },
  },
  components: {
    Twitter,
    Instagram,
    Facebook,
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu');
    },
    exactLocation(number) {
      this.$store.dispatch('exactLocation', number);
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
    gap: 2.5rem;

    &:first-child {
      gap: 1.5rem;

      display: none;
    }
  }

  &__socials {
    display: flex;
    gap: 1rem;
    justify-content: center;

    svg {
      color: var(--color-dark);
      width: 2rem;
      height: 2rem;
      transition: all 0.3s;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  &__line {
    background: #e2e2e2;
    display: block;
    width: 100;
    height: 1px;
    border-radius: 1rem;

    display: none;
  }

  a,
  &__location-link {
    text-transform: uppercase;
    color: var(--color-dark);
    cursor: pointer;
  }

  a {
    font: 300 1.6rem 'Nunito', sans-serif;
    text-decoration: none;

    &:hover {
      font-weight: 600;
    }
  }

  .router-link-active {
    font-weight: 600;
  }

  &__location-link {
    font: 600 1.3rem 'Nunito', sans-serif;
    transition: all 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
