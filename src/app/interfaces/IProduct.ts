import { IColor } from "./Icolor"
import { ISize } from "./Isize"

export interface IProduct {
    id?: number
    name: string
    categoryId: string
}

export interface IProductFeature {
    id?: string
    productId: string
    color: IColor
    size: ISize
    stock: number
}