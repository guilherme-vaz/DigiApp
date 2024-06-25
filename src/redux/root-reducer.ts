//Importações da forma antiga que deixei para exemplificação caso necessário:
// import { userReducer } from "./User/reducer";
// import { cartReducer } from "./Cart/cart-reducer";

import { combineReducers } from "redux";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";

export const rootReducer = combineReducers({
    //Forma antiga de se usar (algumas empreas ainda usam assim)
    // userReducer
    // cartReducer

    //Forma nova, atual:
    userReducer: userSlice.reducer,
    cartReducer: cartSlice.reducer
})

export type RootReducer = ReturnType<typeof rootReducer>;