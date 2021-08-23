<template>
  <a class="btn" :class="bgColor ? 'btn--white' : ''" :style="{ background: bgColor }">
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
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
