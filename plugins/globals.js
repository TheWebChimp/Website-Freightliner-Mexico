import Vue from 'vue';

/* Components */
/* ---------------------------------------------------------------------------------------------- */

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import cookieconsent from 'vue-cookieconsent-component';
Vue.component('cookie-consent', cookieconsent);

/* Other Stuff */
/* ---------------------------------------------------------------------------------------------- */

import VueWaypoint from 'vue-waypoint';

// Waypoint plugin
Vue.use(VueWaypoint);

//import ResponsiveContainer from '~/assets/scripts/ResponsiveContainer.js';
//Vue.component('rcontainer', ResponsiveContainer);

//import VTooltip from 'v-tooltip';
//Vue.use(VTooltip);

import PortalVue from 'portal-vue';
Vue.use(PortalVue);

import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);