import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { auth } from './firebase/firebase';
import DateFilter from './filters/date';
import AlertComponent from './components/utility/Alert';

Vue.config.productionTip = false;

// Initialize the date filter
Vue.filter('date', DateFilter);

// Initialize the alert component
Vue.component('app-alert', AlertComponent);

// Let Firebase auth initialize before creating the app
auth.onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
});
