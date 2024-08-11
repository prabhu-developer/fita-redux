import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { homeSlicer } from "./slicers/homeSlicer";
import { productSlicer } from "./slicers/products";


const reducers = combineReducers({
    'home': homeSlicer.reducer,
    'products': productSlicer.reducer
})

export const store = configureStore({
    reducer: reducers
})