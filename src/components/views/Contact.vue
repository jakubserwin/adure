<template>
  <div class="contact">
    <v-header></v-header>
    <div class="contact__container">
      <v-heading label="Contact us" dark></v-heading>
      <div class="contact__content">
        <form action="#" class="form">
          <div class="form__form">
            <p class="form__title">Send us a message</p>
            <input type="text" class="form__input" placeholder="Name" />
            <input type="text" class="form__input" placeholder="Email" />
            <textarea cols="20" rows="10" placeholder="Message"></textarea>
            <button type="submit" class="form__btn">Send</button>
          </div>
          <div class="form__contact">
            <div>
              <map-marker-outline></map-marker-outline>
              Berlin, Germany
            </div>
            <div>
              <phone-outline></phone-outline>
              123-456-789
            </div>
          </div>
        </form>
        <div class="contact__img">
          <img src="@/assets/images/contact.svg" alt="contact" />
          <a href="https://storyset.com/work">Work illustrations by Storyset</a>
        </div>
      </div>
      <div class="contact__undo">
        <router-link to="/">
          <undo></undo>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { MapMarkerOutline, PhoneOutline, Undo } from 'mdue';
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

import VHeader from '../UI/VHeader.vue';

export default {
  components: {
    VHeader,
    MapMarkerOutline,
    PhoneOutline,
    Undo,
  },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch('toggleLink'));
    onUnmounted(() => store.dispatch('toggleLink'));
  },
};
</script>

<style lang="scss" scoped>
.contact {
  background: var(--color-white);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 93.75em) {
    padding: 5rem;
  }

  @media screen and (max-width: 36em) {
    padding: 3rem;

    .header {
      display: none;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
    gap: 3.5rem;
    flex: 1;
  }

  &__content {
    display: flex;
    gap: 7.5rem;
    flex: 1;

    & > * {
      flex: 1;
    }
  }

  &__img {
    display: flex;
    flex-direction: column;
    align-self: center;

    @media screen and (max-width: 70em) {
      display: none;
    }

    img {
      width: 100%;
      max-height: 30rem;
      transform: scale(1.7);

      @media screen and (min-width: 93.75em) {
        max-height: 35rem;
      }
    }

    a {
      align-self: flex-end;
      color: rgb(218, 218, 218);
      text-decoration: none;
      transform: translateY(4rem);
    }
  }

  &__undo {
    display: none;

    justify-content: center;
    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: var(--color-dark);
    }

    @media screen and (max-width: 36em) {
      display: flex;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fff;
  padding: 3.5rem;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: none;
  }

  &__title {
    font: 500 1.6rem 'Roboto', sans-serif;
    color: var(--color-dark);
  }

  &__input,
  textarea {
    border: none;
    background: transparent;
    border-bottom: 2px solid var(--color-dark);
    font: 300 1.3rem 'Nunito', sans-serif;
    outline: none;

    &::placeholder {
      font: 300 1.3rem 'Nunito', sans-serif;
      color: var(--color-dark);
    }
  }

  &__input {
    padding: 0.5rem;
  }

  textarea {
    resize: none;
    max-height: 7rem;
  }

  &__btn {
    padding: 1.2rem 7rem;
    font: 500 1.3rem 'Roboto', sans-serif;
    color: var(--color-dark);
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    background: var(--color-primary);
    text-decoration: none;
    color: #fff;

    &:hover {
      transform: translateY(-2.5px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__contact {
    font: 600 1.3rem 'Nunito', sans-serif;
    color: var(--color-dark);

    display: flex;
    align-items: center;
    gap: 5rem;
    justify-content: center;

    @media screen and (max-width: 36em) {
      flex-direction: column;
      gap: 2.5rem;
    }

    div {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
}
</style>
