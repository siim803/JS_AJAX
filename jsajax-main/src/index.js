import { createApp } from 'vue';

import { createWebHashHistory, createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/Messages.vue'; 
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import CanvasExample from './pages/CanvasExample.vue';
import WebApis from './pages/WebApis.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/messages', component: Messages, name: 'Messages' },
  { path: '/chuck-norris', component: ChuckNorris, name: 'ChuckNorris' },
  { path: '/rick-and-morty', component: RickAndMorty, name: 'RickAndMorty' },
  { path: '/canvas-example', component: CanvasExample, name: 'CanvasExample' },
  { path: '/web-apis', component: WebApis, name: 'WebApis' },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import App from './App.vue'

const app =  createApp(App);
app.use(router);
app.mount('#app')