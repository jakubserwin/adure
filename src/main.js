import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Vue3TouchEvents from 'vue3-touch-events';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import App from './App.vue';
import store from './store';
import router from './router';

import VHeading from './components/UI/VHeading.vue';
import VButton from './components/UI/VButton.vue';

const app = createApp(App);

app.component('VHeading', VHeading);
app.component('VButton', VButton);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(Vue3TouchEvents);

app.mount('#app');
