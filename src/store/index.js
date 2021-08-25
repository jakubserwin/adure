import { createStore } from 'vuex';
import locations from '../data/locations';

const store = createStore({
  state() {
    return {
      currentLocationIndex: 0,
      locationDetailsShown: false,
      linkActive: false,
      locationsAmount: locations.length,
      menuActive: false,
    };
  },
  getters: {
    location(state) {
      return locations[state.currentLocationIndex];
    },
    detailsShown(state) {
      return state.locationDetailsShown;
    },
    locationsLength(state) {
      return state.locationsAmount;
    },
    pageShown(state) {
      return state.linkActive;
    },
    menuActive(state) {
      return state.menuActive;
    },
  },
  mutations: {
    increaseIndex(state) {
      if (state.currentLocationIndex === 4) state.currentLocationIndex = 0;
      else state.currentLocationIndex += 1;
    },
    decreaseIndex(state) {
      if (state.currentLocationIndex === 0) state.currentLocationIndex = 4;
      else state.currentLocationIndex -= 1;
    },
    setIndex(state, payload) {
      if (payload >= 0 && payload <= 4) state.currentLocationIndex = payload;
    },
    toggleDetails(state) {
      state.locationDetailsShown = !state.locationDetailsShown;
    },
    toggleLink(state) {
      state.linkActive = !state.linkActive;
    },
    toggleMenu(state) {
      state.menuActive = !state.menuActive;
    },
  },
  actions: {
    nextLocation(context) {
      const box = document.querySelector('.location');
      box.classList.toggle('animate');
      setTimeout(() => {
        context.commit('increaseIndex');
        setTimeout(() => {
          box.classList.toggle('animate');
        }, 500);
      }, 1000);
    },
    previousLocation(context) {
      const box = document.querySelector('.location');
      box.classList.toggle('animate');
      setTimeout(() => {
        context.commit('decreaseIndex');
        setTimeout(() => {
          box.classList.toggle('animate');
        }, 500);
      }, 1000);
    },
    exactLocation(context, payload) {
      const box = document.querySelector('.location');
      box.classList.toggle('animate');
      setTimeout(() => {
        context.commit('setIndex', payload);
        setTimeout(() => {
          box.classList.toggle('animate');
        }, 500);
      }, 1000);
    },
    toggleLocationDetails(context) {
      context.commit('toggleDetails');
    },
    toggleLink(context) {
      context.commit('toggleLink');
    },
    toggleMenu(context) {
      context.commit('toggleMenu');
    },
  },
});

export default store;
