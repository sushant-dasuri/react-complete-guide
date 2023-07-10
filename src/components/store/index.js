import { configureStore } from "@reduxjs/toolkit";
import UIReducer from '../store/ui-slice';
import CartReducer from '../store/cart-slice';


const store = configureStore({
    reducer: {ui: UIReducer, cart: CartReducer}
})

export default store;