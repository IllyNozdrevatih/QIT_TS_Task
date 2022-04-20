import {ProductTableRowInterface} from "@/modules/product/interfaces/product-table-row.interface";
import {ProductTableRowMock} from "@/modules/product/services/product-table-row.mock";

export interface ProductState {
    productList: Array<ProductTableRowInterface>,
    productListCheckedIds: Array<string>
}

export const productModule = {
    namespaced: true,
    state: (): ProductState => ({
        productList: Array<ProductTableRowInterface>(),
        productListCheckedIds: []
    }),
    getters: {
        totalPrice(state: ProductState) {
            if (state.productList.length === 0) return 0
            const productListCosts = state.productList.map(function (product) {
                return product.price * product.quantity
            })
            return productListCosts.reduce((a, b) => a + b, 0)
        },
        isAllCheckedTable(state: ProductState){
            const allProductIDs = state.productList.map(product => product.id)
            if (allProductIDs.length === 0) return false
            return allProductIDs.length === state.productListCheckedIds.length
        }
    },
    mutations: {
        SET_PRODUCT_LIST(state: ProductState, payload: Array<ProductTableRowInterface>) {
            state.productList = payload
        },
        ADD_PRODUCT(state: ProductState, payload: ProductTableRowInterface) {
            state.productList.push(payload)
        },
        ADD_PRODUCT_TO_CHECKED_ARRAY(state: ProductState, payload: string) {
            state.productListCheckedIds.push(payload)
        },
        REMOVE_PRODUCT_TO_CHECKED_ARRAY(state: ProductState, payload: string) {
            const idIndex = state.productListCheckedIds.findIndex(item => item === payload)
            state.productListCheckedIds.splice(idIndex, 1)
        },
        ADD_ALL_PRODUCTS_TO_CHECKED_ARRAY(state: ProductState) {
            state.productListCheckedIds = state.productList.map(product => product.id)
        },
        DELETE_PRODUCT_LIST(state: ProductState) {
            state.productList = state.productList.filter(product => state.productListCheckedIds.includes(product.id) === false)
            state.productListCheckedIds = []
        }
    },
    actions: {
        getProductList(context: any) {
            context.commit("SET_PRODUCT_LIST", ProductTableRowMock)
        }
    },
}
