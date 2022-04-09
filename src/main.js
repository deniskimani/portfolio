import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'fontawesome'
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/free-solid-svg-icons"
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/styles.scss'

createApp(App).use(router).mount("#app");