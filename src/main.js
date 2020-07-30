import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { auth } from './firebase/firebase';
import DateFilter from './filters/date';

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);

// Let Firebase auth initialize before creating the app
auth.onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
});
