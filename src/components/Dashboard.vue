<template>
  <main
    :style="{
      background: 'url(' + require('@/assets/images/' + location.img + '.jpg') + ')',
    }"
  >
    <!-- <div class="blur"></div> -->
    <div class="container">
      <v-header></v-header>
      <div class="location">
        <v-heading :label="location.name"></v-heading>
        <p class="desc">{{ location.label }}</p>
        <v-button label="View details" :locationId="location.id"></v-button>
      </div>
      <div class="footer">
        <p class="footer__current-location">0{{ location.id }}</p>
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
      <control-panel :active="location.id"></control-panel>
    </div>
  </main>
</template>

<script>
import { Twitter, Instagram, Facebook } from 'mdue';
import VHeader from './UI/VHeader.vue';
import ControlPanel from './ControlPanel.vue';

export default {
  computed: {
    location() {
      return this.$store.getters.location;
    },
  },
  components: {
    Twitter,
    Instagram,
    Facebook,
    VHeader,
    ControlPanel,
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: calc(var(--full-height, 1vh) * 100);
  background-size: cover !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // overflow: hidden;
  --blurAmount: 3px;
  transition: all 1.5s;
}

.blur {
  position: absolute;
  filter: blur(var(--blurAmount));
  top: calc(0 - var(--blurAmount) * 2);
  left: calc(0 - var(--blurAmount) * 2);
  width: calc(100% + var(--blurAmount) * 4);
  height: calc(100% + var(--blurAmount) * 4);

  // background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  // background-size: cover !important;
  // background-position: center center;

  z-index: -1;
}

.container {
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

  // background-position: center center !important;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
  //   url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  // background-size: auto calc(100vh + var(--blurAmount) * 4) !important;
  // background-position: center center;
}

.location {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2.5rem;

  transition: all 1s;

  .desc {
    max-width: 60rem;
    text-align: center;
  }
}

.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

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
}
</style>
