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
          <a class="active" @click="toggleMenu">home</a>
        </li>
        <li>
          <a @click="toggleMenu">about</a>
        </li>
        <li>
          <a @click="toggleMenu">contact</a>
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
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: {
    Twitter,
    Instagram,
    Facebook,
  },
  setup() {
    const store = useStore();
    const active = computed(() => store.getters.menuActive);
    const darkMode = computed(() => store.getters.detailsShown);

    const toggleMenu = () => store.dispatch('toggleMenu');
    const exactLocation = (number) => store.dispatch('exactLocation', number);

    return {
      active,
      darkMode,
      toggleMenu,
      exactLocation,
    };
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

  @media screen and (max-width: 70em) {
    width: 45%;
  }

  @media screen and (max-width: 36em) {
    width: 100%;
    border-radius: 2.5rem;
  }

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

      @media screen and (max-width: 36em) {
        display: flex;
      }
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
    width: 100;
    height: 1px;
    border-radius: 1rem;

    display: none;

    @media screen and (max-width: 36em) {
      display: block;
    }
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

  .active {
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
