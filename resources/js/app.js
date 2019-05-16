

require('./bootstrap');

window.Vue = require('vue');
window.VueResource = require('vue-resource');


Vue.component('index-component', require('./components/IndexComponent.vue').default);
Vue.component('announcement-component', require('./components/AnnouncementComponent.vue').default);
Vue.component('form-announcement-component', require('./components/FormToInsertAnnouncement.vue').default);


const app = new Vue({
    el: '#app',
});
