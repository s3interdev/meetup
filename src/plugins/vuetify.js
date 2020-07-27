import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#008cba',
        secondary: '#f0f0f0',
        success: '#43ac6a',
        info: '#d1edf6',
        warning: '#efb85b',
        error: '#f04124',
      },
    },
  },
});
