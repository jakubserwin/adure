<template>
  <transition name="fade-out">
    <div class="location" v-if="!detailsShown">
      <v-heading :label="location.name"></v-heading>
      <p class="desc">{{ location.label }}</p>
      <v-button label="View details" @click="showDetails"></v-button>
    </div>
  </transition>
  <location-details :active="detailsShown"></location-details>
</template>

<script>
import LocationDetails from '../LocationDetails.vue';

export default {
  computed: {
    location() {
      return this.$store.getters.location;
    },
    detailsShown() {
      return this.$store.getters.detailsShown;
    },
  },
  components: {
    LocationDetails,
  },
  methods: {
    showDetails() {
      this.$store.dispatch('toggleLocationDetails');
    },
  },
};
</script>

<style lang="scss" scoped>
.location {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2.5rem;

  text-align: center;

  @media screen and (max-width: 36em) {
    margin-top: 7.5rem;
  }

  transition: all 1s;

  .desc {
    max-width: 60rem;
    text-align: center;
  }
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: all 0.3s;
}
</style>
