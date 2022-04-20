<template>
  <form class="mb-4" @submit.prevent="submitForm">
    <div class="row d-flex align-items-center">
      <div class="col-lg-4">
        <input class="form-control" v-model="product.name" placeholder="Product name" required>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-auto">
            <input class="form-control" v-model="product.price" type="number" placeholder="Price" min="1" required>
          </div>
          <div class="col-auto">
            <input class="form-control" v-model="product.quantity" type="number" placeholder="Qty" min="1" required>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import {mapMutations} from "vuex";
import {ProductTableRowInterface} from "@/modules/product/interfaces/product-table-row.interface";
import {ProductTableRowFabric} from "@/modules/product/services/product-table-row.fabric";

export default Vue.extend({
  name: 'ProductFormAdd',
  data(){
    return {
      product: ProductTableRowFabric('', 0, 0) as ProductTableRowInterface
    }
  },
  methods: {
    ...mapMutations("product", ["ADD_PRODUCT"]),
    submitForm(){
      const immutableProduct = {...this.product}
      this.ADD_PRODUCT(immutableProduct)
      this.product = ProductTableRowFabric('', 0, 0)
    }
  }
})
</script>
