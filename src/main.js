import Vue from 'vue';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
