import { createStore } from 'vuex';
import locations from '../data/locations';

const store = createStore({
  state() {
    return {
      currentLocationIndex: 0,
    };
  },
  getters: {
    location(state) {
      return locations[state.currentLocationIndex];
    },
  },
  mutations: {
    increaseIndex(state) {
      if (state.currentLocationIndex === 4) state.currentLocationIndex = 0;
      else state.currentLocationIndex += 1;
    },
  },
  actions: {
    changeLocation(context) {
      //   const box = document.querySelector('.siema');
      //   box.classList.toggle('animate');
      //   setTimeout(() => {
      context.commit('increaseIndex');
      //     setTimeout(() => {
      //       box.classList.toggle('animate');
      //     }, 500);
      //   }, 1500);
    },
  },
});

export default store;
