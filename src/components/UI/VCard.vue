<template>
  <div class="card">
    <component :is="cardData.icon" />
    <p class="card__title">{{ cardData.title }}</p>
    <p class="card__desc">{{ cardData.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: rgba(149, 157, 165, 0.15) 0px 5px 20px;
  background: #fff;
  padding: 1.5rem;

  display: grid;
  gap: 0.5rem;
  place-items: center;
  border-radius: 1rem;
  text-align: center;

  &__title {
    font: 500 1.6rem 'Roboto', sans-serif;
    color: var(--color-dark);
  }

  &__desc {
    font: 300 1.3rem 'Nunito', sans-serif;
    color: #262626;
  }

  svg {
    color: var(--color-primary);
    width: 3rem;
    height: 3rem;
  }
}
</style>
