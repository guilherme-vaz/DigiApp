import { render, screen } from "@testing-library/react";
import { Cart } from "../components/Cart/Cart";
import { DigimonList } from "../components/DigimonList/DigimonList";
import userEvent from "@testing-library/user-event";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/Cart/cart-slice";

// import { Provider } from "react-redux";
// import { store } from "../redux/store";

//Usar o Provider transforma o teste unitário em teste integrado por isso vamos usar o Mock.

//Mock

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
    return {
        useDispatch: () => {
            return mockDispatch
        },
        useSelector: () => {
            return {
                cart: []
            }
        }
    }
})

describe("Cart > Unit tests", () => {
    it("should render an empty cart correctly", () => {
        render(<Cart showCart={true} cart={[]}/>)
        const titleElement = screen.getByRole('heading', { level: 1 })
        expect(titleElement).toHaveTextContent('Carrinho')
    });

    it("Should remove an item", () => {
        render(<Cart showCart={true} cart={[products[0]]} />);
        const removeProductButton = screen.getByRole("button", { name: "Remover" });

        userEvent.click(removeProductButton)
        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
    })
})