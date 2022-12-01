import { createReducer } from "@reduxjs/toolkit";
import { addItem, deleteItem } from "../actions/itemActions";
import { arrOfData } from "../db/db";

const initialState = {
    items: arrOfData
};

const itemReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addItem, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(deleteItem, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        });
});

export default itemReducer;