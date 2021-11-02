require('./bootstrap');

import Vue from 'vue'
import App from './vue/app.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faPlusSquare, faTrash)

const app = new Vue({
    el: '#app',
    components:{ App }
});
