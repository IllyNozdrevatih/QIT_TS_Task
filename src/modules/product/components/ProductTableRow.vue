<template>
  <tr>
    <th scope="col">
      <input @change="productCheckboxHandler" type="checkbox" :checked="productListCheckedIds.includes(product.id)">
    </th>
    <td>{{ product.name }}</td>
    <td>${{ product.price }}</td>
    <td>{{ product.quantity }}</td>
    <td>${{ sum }}</td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import {ProductTableRowInterface} from "@/modules/product/interfaces/product-table-row.interface";
import {mapMutations, mapState} from "vuex";

export default Vue.extend({
  name: 'ProductTableRow',
  props: {
    product: {
      type: ProductTableRowInterface
    }
  },
  methods: {
    ...mapMutations("product", ["ADD_PRODUCT_TO_CHECKED_ARRAY", "REMOVE_PRODUCT_TO_CHECKED_ARRAY"]),
    productCheckboxHandler(e) {
      if (e.target.checked) {
        this.ADD_PRODUCT_TO_CHECKED_ARRAY(this.product.id)
        return
      }
      this.REMOVE_PRODUCT_TO_CHECKED_ARRAY(this.product.id)
    }
  },
  computed: {
    sum(): number {
      return this.product.price * this.product.quantity
    },
    ...mapState("product", ["productListCheckedIds"])
  }
})
</script>
