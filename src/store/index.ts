import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {productModule} from "@/modules/product/store/product.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product: productModule
  },
  plugins: [
    createPersistedState()
  ]
})
