import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/reset.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vuelidate from 'vuelidate';
// export const eventBus = new Vue();

import {
	faBriefcase,
	faHandsHolding,
	faBars,
	faHandshake,
	faCircleInfo,
  faHouse,
  faEye,
  faPaperPlane,
  faPlay,
  faTv,
	faAngleLeft,
	faAngleRight,
  faGlobe,
	faMessage,
	faHandsHoldingCircle,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
	faEnvelope,
	faLightbulb,
	faAddressCard,
} from "@fortawesome/free-regular-svg-icons";

import {
	faInstagram,
	faGithub,
	faLinkedinIn,
	faYoutube,
  faBlogger,
  faReadme,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
	faInstagram,
	faEnvelope,
	faGithub,
	faLinkedinIn,
	faBriefcase,
	faYoutube,
	faBlogger,
	faHandshake,
	faHandsHolding,
	faLightbulb,
	faBars,
	faCircleInfo,
	faAddressCard,
  faHouse,
  faEye,
  faPaperPlane,
  faPlay,
  faTv,
  faReadme,
  faAngleLeft,
  faAngleRight,
  faVuejs,
  faGlobe,
	faMessage,
	faHandsHoldingCircle,
	faXmark
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon,);
Vue.config.productionTip = false;
Vue.use(Vuelidate)
new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
