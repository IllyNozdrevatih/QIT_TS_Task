<template>
  <div id="app">
    <div class="container mt-4">
      <h1 class="mb-4">Vue Invoice Calc</h1>
      <ProductFormAdd/>
      <ProductTable :productList="productList"/>
      <div class="row justify-content-between">
        <div class="col-auto">
          <button type="button"  @click="DELETE_PRODUCT_LIST" class="btn btn-danger">Delete</button>
        </div>
        <div class="col-auto">
          <div class="h4 font-weight-normal">Total: <b>${{ totalPrice }}</b></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductTable from "@/modules/product/components/ProductTable.vue";
import {mapState, mapMutations, mapGetters} from "vuex";
import ProductFormAdd from "@/modules/product/components/ProductFormAdd.vue";

export default Vue.extend({
  name: 'App',
  components: {ProductFormAdd, ProductTable},
  methods: {
    ...mapMutations("product", ["DELETE_PRODUCT_LIST"]),
  },
  computed: {
    ...mapState("product", ["productList"]),
    ...mapGetters("product", ["totalPrice"])
  },
});
</script>
