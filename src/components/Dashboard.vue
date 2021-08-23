<template>
  <main
    :style="{
      background: 'url(' + require('@/assets/images/' + location.img + '.jpg') + ')',
    }"
  >
    <!-- <div class="blur"></div> -->
    <div class="location"></div>
  </main>
  <!-- <div>{{ location.name }}</div> -->
  <!-- <img :src="require(`@/assets/images/${location.img}.jpg`)" alt="location" /> -->
</template>

<script>
export default {
  props: {
    location: Object,
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

.location {
  max-width: 1200px;
  width: 75%;
  height: 500px;
  // background-color: rgba(0, 0, 0, 0.45);
  box-shadow: 0 0 0 150rem rgba(0, 0, 0, 0.65), 0 0 5px 2px rgba(255, 255, 255, 0.35);
  border-radius: 5rem;
  color: #fff;

  // background-position: center center !important;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
  //   url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  // background-size: auto calc(100vh + var(--blurAmount) * 4) !important;
  // background-position: center center;
}
</style>
