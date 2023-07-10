import { createSlice } from "@reduxjs/toolkit";

const initialUIstate = {isCartVisible: false}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIstate,
    reducers: {
        toggleCartVisiblity(state) {
            state.isCartVisible = !state.isCartVisible;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;