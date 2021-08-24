<template>
  <div class="details" :class="active ? 'active' : ''"></div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  background: #fff;
  position: absolute;
  top: 100%;
  // top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 1s;
}

.active {
  transform: translateY(-100%);
}
</style>
