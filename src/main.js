import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVueNext from "bootstrap-vue-next";

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import HelperClass from "./helpers";

const helper = new HelperClass();

createApp(App)
  .use(store)
  .use(BootstrapVueNext)
  .use(router)
  .provide("helper", helper)
  .mount("#app");
