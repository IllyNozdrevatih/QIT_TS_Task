import {ProductTableRowInterface} from "@/modules/product/interfaces/product-table-row.interface";
import {ProductTableRowFabric} from "@/modules/product/services/product-table-row.fabric";


export const ProductTableRowMock: ProductTableRowInterface[] = [
    ProductTableRowFabric('iPhone', 1000, 1),
    ProductTableRowFabric('iPad', 500, 2)
]
