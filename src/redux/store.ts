//Forma antiga de usar
//import { applyMiddleware, createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./root-reducer"
import logger from 'redux-logger'

//Forma antiga de fazer
// export const store = createStore(
//     rootReducer,
//     applyMiddleware(logger)
// );

//Forma atual de fazer o store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})