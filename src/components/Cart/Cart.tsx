import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { IProduct } from "../../interfaces/product";

interface ICart {
    showCart: boolean;
    cart: IProduct[]
}

export const Cart: React.FC<ICart> = ({ showCart, cart }) => {

    // const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)

    return (
        <>
            <h1>Carrinho</h1>
            <p>Total: ${total}</p>
        </>
    )
}