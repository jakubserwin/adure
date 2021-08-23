import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import VHeading from './components/UI/VHeading.vue';

const app = createApp(App);

app.component('VHeading', VHeading);

app.use(store);

app.mount('#app');
