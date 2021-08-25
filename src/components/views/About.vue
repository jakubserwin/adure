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
    </div>
  </div>
</template>

<script>
import cards from '../../data/cards';

import VHeader from '../UI/VHeader.vue';
import VCard from '../UI/VCard.vue';

export default {
  data() {
    return {
      cards,
    };
  },
  components: {
    VHeader,
    VCard,
  },
  mounted() {
    this.$store.dispatch('toggleLink');
  },
  unmounted() {
    this.$store.dispatch('toggleLink');
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

  &__container {
    margin-top: 3.5rem;
    opacity: 0;
    animation: fadeIn 1s 1.25s forwards;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content);
    gap: 3.5rem;
    align-items: center;

    img {
      width: 100%;
      border-radius: 1.5rem;
      max-height: 30rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__cards {
    grid-column: 1/-1;
    display: flex;
    gap: 5rem;
  }
}

.desc {
  color: var(--color-dark);
  font-weight: 300;
}
</style>
