//Essa forma, o Slice, é a forma atual de se usar o Redux.
import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user";

const initialState: IUserState = {
    user: null
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        //Primeira action: login
        login: (state, action) => {
            state.user = action.payload
        },
        //Segunda action: logout
        logout: (state, action) => {
            state.user = null;
        }
    }
});

export const { login, logout } = userSlice.actions