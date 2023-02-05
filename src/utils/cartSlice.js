import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:["Banans","Apples"],
    },
    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload);
        }
    }
})