import { createRouter, createWebHistory } from 'vue-router';

import Location from '../components/views/Location.vue';
import About from '../components/views/About.vue';
import Contact from '../components/views/Contact.vue';

const routes = [
  { path: '/', component: Location },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, left: 0 };
  },
});

export default router;
