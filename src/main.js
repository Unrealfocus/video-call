import "tailwindcss/tailwind.css";

import { createApp } from "vue";
import { router } from "./routes";
import store from "./store";
import Vuex from "vuex";

import "./style.css";

import App from "./App.vue";
const app = createApp(App);

app.use(store);
app.use(Vuex);

app.use(router);
app.mount("#app");


