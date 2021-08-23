<template>
  <router-link
    v-if="locationId"
    :to="'/location-' + locationId"
    class="btn"
    :class="bgColor ? 'btn--white' : ''"
    :style="{ background: bgColor }"
  >
    {{ label }}
  </router-link>
  <button v-else class="btn">{{ label }}</button>
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
    transform: translateY(0);
  }

  &--white {
    color: #fff;
  }
}
</style>
