import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducers/itemReducer";

const store = configureStore({
    reducer: { items: itemReducer },
})

export default store;