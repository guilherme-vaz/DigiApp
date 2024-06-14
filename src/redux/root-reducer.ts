import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";

export const rootReducer = combineReducers({
    userReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;