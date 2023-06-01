import { configureStore , createReducer} from "@reduxjs/toolkit";
import { getInitialData } from "./initialValues";
import { userReducer } from "./slices/userSlice";
import {REDUX_STATE_SUBSCR} from '../utils/constants'
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    cart: cartReducer
  },
  preloadedState: getInitialData()
})

store.subscribe(() => localStorage.setItem(REDUX_STATE_SUBSCR, JSON.stringify(store.getState())))