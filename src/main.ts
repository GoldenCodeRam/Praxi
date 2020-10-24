import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

library.add(faSearch);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
