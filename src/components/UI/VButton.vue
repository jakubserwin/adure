<template>
  <router-link
    :to="'/location-' + locationId"
    class="btn"
    :class="bgColor ? 'btn--white' : ''"
    :style="{ background: bgColor }"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    locationId: {
      type: Number,
      required: true,
    },
    bgColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1.2rem 7rem;
  font: 500 1.3rem 'Roboto', sans-serif;
  color: var(--color-dark);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
  background: #fff;
  text-decoration: none;

  &:hover {
    transform: translateY(-2.5px);
  }

  &:active {
    transform: translateY(-2.5px);
  }

  &--white {
    color: #fff;
  }
}
</style>
