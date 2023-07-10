import { createSlice } from "@reduxjs/toolkit";

const initialUIstate = {isCartVisible: false, notification: null}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIstate,
    reducers: {
        toggleCartVisiblity(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;