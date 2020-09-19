import Vue from "vue"
import App from "./App.vue"
import { plainStore } from "./stores"


new Vue({
  store: plainStore,
  render: (h) => h(App)
}).$mount("#app")
