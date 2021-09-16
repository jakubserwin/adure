<template>
  <div class="details" :class="active ? 'active' : ''" v-touch:swipe="swipeHandler">
    <v-header></v-header>
    <div class="details__container" v-if="active">
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
      <Carousel :value="location.slider" :circular="true" :autoplayInterval="3000">
        <template #item="slotProps">
          <img :src="require(`@/assets/images/${slotProps.data.img}.jpg`)" />
        </template>
      </Carousel>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Carousel from 'primevue/carousel';

import VHeader from './UI/VHeader.vue';
import VFooter from './UI/VFooter.vue';

export default {
  components: {
    VHeader,
    VFooter,
    Carousel,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const location = computed(() => store.getters.location);

    const swipeHandler = (direction) => {
      if (direction === 'bottom') store.dispatch('toggleLocationDetails');
    };

    return { location, swipeHandler };
  },
};
</script>

<style lang="scss" scoped>
.details {
  background: var(--color-white);
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 1s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3.5rem;

  @media screen and (min-width: 93.75em) {
    padding: 5rem;
  }

  @media screen and (max-width: 36em) {
    padding: 3rem;
    justify-content: center;
    border-radius: 2.5rem;

    .header {
      display: none;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    gap: 7.5rem;

    opacity: 0;

    @media screen and (min-width: 93.75em) {
      gap: 5rem;
    }

    @media screen and (max-width: 70em) {
      flex-direction: column-reverse;
      gap: 0;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .btn {
      align-self: flex-start;
      @media screen and (max-width: 36em) {
        align-self: center;
      }
    }

    @media screen and (max-width: 70em) {
      margin-top: 2.5rem;
    }
  }

  &__desc {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    max-height: 14.5rem;
    max-width: 45rem;
    padding-right: 3rem;

    @media screen and (min-width: 93.75em) {
      max-width: 55rem;
    }

    @media screen and (max-width: 70em) {
      max-width: none;
      max-height: 6.5rem;
    }

    @media screen and (max-width: 36em) {
      max-height: 10rem;
    }

    .desc {
      color: var(--color-dark);
      font-weight: 300;
    }
  }
}

.active {
  transform: translateY(-100%);

  .details__container {
    animation: fadeIn 1s 1.25s forwards;
  }
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

<style lang="scss">
.p-carousel {
  flex: 1;
}

.p-carousel-items-content {
  border-radius: 1.5rem;

  img {
    height: 100%;
    max-height: 35rem;
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: 93.75em) {
      max-height: 40rem;
    }

    @media screen and (max-width: 70em) {
      max-height: 25rem;
    }

    @media screen and (max-width: 36em) {
      max-height: 17rem;
      border-radius: 1.5rem;
    }
  }
}

.p-carousel-indicators {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;

  button {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }
}

.p-link {
  position: relative;
  border: none;
  background: var(--color-dark);
  opacity: 0.15;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.p-carousel-prev,
.p-carousel-next {
  background: none;
  color: var(--color-dark);
  opacity: 1;
  top: 0;
  margin: 0 1rem;

  @media screen and (max-width: 70em) {
    display: none;
  }
}

.p-highlight {
  button {
    opacity: 1;
  }
}
</style>
