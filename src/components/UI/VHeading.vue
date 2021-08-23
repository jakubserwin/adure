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

  &--dark {
    color: var(--color-dark);
  }
}
</style>
