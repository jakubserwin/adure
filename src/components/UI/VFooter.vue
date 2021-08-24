<template>
  <div class="footer" :class="darkMode ? 'footer--dark' : ''">
    <p class="footer__current-location">0{{ this.$store.getters.location.id }}</p>
    <div class="footer__details-cta" v-if="darkMode">
      <chevron-down @click="hideDetails"></chevron-down>
    </div>
    <div class="footer__socials">
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
  </div>
</template>

<script>
// eslint-disable-next-line
import { Twitter, Instagram, Facebook, ChevronDown } from 'mdue';

export default {
  computed: {
    darkMode() {
      return this.$store.getters.detailsShown;
    },
  },
  components: {
    Twitter,
    Instagram,
    Facebook,
    ChevronDown,
  },
  methods: {
    hideDetails() {
      this.$store.dispatch('toggleLocationDetails');
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  z-index: 5;

  &__current-location {
    font: 900 8rem / 0.75 'Roboto', sans-serif;
    opacity: 0.2;
  }

  &__socials {
    display: flex;
    gap: 1rem;

    svg {
      width: 2rem;
      height: 2rem;
      fill: #fff;
      opacity: 0.5;
      transition: all 0.3s;
    }

    a:hover svg {
      opacity: 1;
    }
  }

  &__details-cta {
    display: flex;

    svg {
      cursor: pointer;
      height: 4rem;
      width: 4rem;
      transform: translateY(1rem);
    }
  }

  &--dark {
    svg {
      fill: var(--color-dark);
      opacity: 0.75;
    }

    p {
      color: #333339;
      opacity: 0.1;
    }
  }
}
</style>
