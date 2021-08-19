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
      context.commit('increaseIndex');
    },
  },
});

export default store;
