<template>
  <div class="about">
    <v-header></v-header>
    <div class="about__container">
      <div class="about__content">
        <v-heading label="Adure" dark></v-heading>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat elit nibh
          nulla. Nec consectetur arcu cursus ut auctor posuere.
        </p>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus cursus sed arcu augue eget
          egestas. Augue sagittis, integer ipsum felis. Massa tellus faucibus sed augue tincidunt.
        </p>
      </div>
      <img src="@/assets/images/about.jpg" alt="People in mountains" class="about__img" />
      <div class="about__cards">
        <v-card v-for="card in cards" :key="card.id" :cardData="card"></v-card>
      </div>
      <div class="about__undo">
        <router-link to="/">
          <undo></undo>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Undo } from 'mdue';
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

import cards from '../../data/cards';

import VHeader from '../UI/VHeader.vue';
import VCard from '../UI/VCard.vue';

export default {
  components: {
    VHeader,
    VCard,
    Undo,
  },
  setup() {
    const store = useStore();

    onMounted(() => store.dispatch('toggleLink'));
    onUnmounted(() => store.dispatch('toggleLink'));

    return { cards };
  },
};
</script>

<style lang="scss" scoped>
.about {
  background: var(--color-white);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  padding: 3.5rem;

  @media screen and (min-width: 93.75em) {
    padding: 5rem;
  }

  @media screen and (max-width: 36em) {
    padding: 3rem;

    .header {
      display: none;
    }
  }

  display: flex;
  flex-direction: column;

  &__container {
    margin-top: 3.5rem;
    opacity: 0;
    animation: fadeIn 1s 1.25s forwards;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content 1fr;
    gap: 3.5rem;
    align-items: center;

    flex: 1;

    @media screen and (max-width: 70em) {
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
    }

    img {
      width: 100%;
      border-radius: 1.5rem;
      max-height: 30rem;

      @media screen and (min-width: 93.75em) {
        max-height: 40rem;
      }

      @media screen and (max-width: 70em) {
        display: none;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__cards {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;

    @media screen and (max-width: 70em) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 36em) {
      gap: 2.5rem;
    }
  }

  &__undo {
    display: none;

    justify-content: center;
    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: var(--color-dark);
    }

    @media screen and (max-width: 36em) {
      display: flex;
    }
  }
}

.desc {
  color: var(--color-dark);
  font-weight: 300;

  &:last-child {
    @media screen and (max-width: 36em) {
      display: none;
    }
  }
}
</style>
