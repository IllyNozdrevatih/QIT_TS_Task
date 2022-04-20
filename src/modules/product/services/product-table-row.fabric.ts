// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {ProductTableRowInterface} from "@/modules/product/interfaces/product-table-row.interface";

export function ProductTableRowFabric(name: string, price: number, quantity: number):ProductTableRowInterface {
    const product:ProductTableRowInterface = {
        id: uuidv4(),
        name: name,
        price: price,
        quantity: quantity
    }
    return product
}
