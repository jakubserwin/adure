<template>
  <h1 class="heading" :class="dark ? 'heading--dark' : ''">{{ label }}</h1>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  color: #fff;
  font: 900 6.4rem 'Roboto', sans-serif;

  @media screen and (max-width: 70em) {
    font-size: 4.2rem;
  }

  @media screen and (max-width: 36em) {
    font-size: 3.2rem;
  }

  &--dark {
    color: var(--color-dark);
  }
}
</style>
