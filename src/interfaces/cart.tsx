import { IProduct } from "./product";

export interface ICartState {
    cart: IProduct[]
}

export interface ICartAction {
    type: string,
    payload: IProduct,
}