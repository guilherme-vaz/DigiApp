import { ICartAction, ICartState } from "../../interfaces/cart";

const initialState: ICartState = {
    cart: [],
}

export function cartReducer( state = initialState, action: ICartAction ){
    switch(action.type) {
        //Basicamente pega tudo que tem no carrinho e adiciona novo produto
        case 'cart/add-product':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload,
                ]
            }
        case 'cart/remove-product':
            const productToRemove = action.payload
            const cartFiltered = state.cart.filter(product => product.id !== productToRemove.id)

            return {
                ...state,
                cart: cartFiltered
            }
        default:
            return state
    }
}