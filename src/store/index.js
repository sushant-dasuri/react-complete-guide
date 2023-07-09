import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../store/counter';
import AuthReducer from '../store/auth';





const store = configureStore({
    reducer: { counter: CounterReducer, auth: AuthReducer }
});

export default store;