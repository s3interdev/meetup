import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1e2b37',
        secondary: '#809395',
        accent: '#adb5bd',
        success: '#149a80',
        info: '#2384c6',
        warning: '#d48606',
        danger: '#e12e1c',
        anchor: '#0f7864',
      },
      dark: {
        primary: '#264764',
        secondary: '#313131',
        accent: '#adb5bd',
        success: '#009670',
        info: '#2384c6',
        warning: '#d48606',
        danger: '#e12e1c',
        anchor: '#006437',
      },
    },
  },
});
