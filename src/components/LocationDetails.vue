<template>
  <div class="details" :class="active ? 'active' : ''">
    <v-header></v-header>
    <div class="details__container">
      <div class="details__content">
        <v-heading :label="location.name" dark></v-heading>
        <div class="details__desc">
          <p class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar volutpat elit nibh
            nulla. Nec consectetur arcu cursus ut auctor posuere.
          </p>
          <p class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus cursus sed arcu augue
            eget egestas. Augue sagittis, integer ipsum felis. Massa tellus faucibus sed augue
            tincidunt.
          </p>
          <p class="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias officia pariatur
            laboriosam minima nostrum consectetur quo neque, veritatis aliquid distinctio ipsam
            architecto voluptatem culpa excepturi magni sunt beatae! Nemo rerum corrupti veritatis
            id praesentium architecto sapiente voluptatem perspiciatis consectetur. Earum?
          </p>
        </div>
        <v-button label="Book now" :bgColor="location.color"></v-button>
      </div>
      <div class="details__img">
        <img :src="require(`@/assets/images/${location.img}.jpg`)" />
        <control-panel :active="location.id" mode="horizontal"></control-panel>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './UI/VHeader.vue';
import VFooter from './UI/VFooter.vue';
import ControlPanel from './ControlPanel.vue';

export default {
  components: { VHeader, VFooter, ControlPanel },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    location() {
      return this.$store.getters.location;
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3.5rem;

  &__container {
    display: flex;
    align-items: center;
    gap: 7.5rem;
  }

  &__content {
    flex: 1;
  }

  &__img {
    flex: 1;

    img {
      border-radius: 1.5rem;
      width: 100%;
    }
  }

  &__desc {
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    max-height: 15rem;
    max-width: 45rem;
    padding-right: 3rem;

    .desc {
      color: var(--color-dark);
      font-weight: 300;
    }
  }
}

.active {
  transform: translateY(-100%);
}

.details__desc::-webkit-scrollbar {
  width: 4px;
}
.details__desc::-webkit-scrollbar-button {
  height: 3px;
}
.details__desc::-webkit-scrollbar-thumb {
  background: var(--color-dark);
  border-radius: 5rem;
}
</style>
