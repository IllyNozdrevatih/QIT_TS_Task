<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">
        <input type="checkbox" @change="productTableCheckboxHandler" :checked="isAllCheckedTable">
      </th>
      <th scope="col">Product name</th>
      <th scope="col">Price</th>
      <th scope="col">Qta</th>
      <th scope="col">Sum</th>
    </tr>
    </thead>
    <tbody>
      <ProductTableRow
          v-for="product of productList"
          :key="product.id"
          :product="product"
      />
    </tbody>
  </table>
</template>


<script lang="ts">
import Vue from 'vue';
import {mapMutations, mapGetters} from "vuex";
import ProductTableRow from "@/modules/product/components/ProductTableRow.vue";
import {ProductTableRowInterface} from "@/modules/product/interfaces/product-table-row.interface";

export default Vue.extend({
  name: 'ProductTable',
  props: {
    productList: {
      type: Array as () => ProductTableRowInterface[],
      default: []
    }
  },
  methods: {
    ...mapMutations("product",["ADD_ALL_PRODUCTS_TO_CHECKED_ARRAY"]),
    productTableCheckboxHandler(e:any){
      if (e.target.checked) {
        this.ADD_ALL_PRODUCTS_TO_CHECKED_ARRAY()
        return
      }
    }
  },
  components: {ProductTableRow},
  computed: {
    ...mapGetters("product", ["isAllCheckedTable"])
  }
})
</script>
