import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  install(Vue) {
    Vue.prototype.$aos = AOS;
  },
  
}

