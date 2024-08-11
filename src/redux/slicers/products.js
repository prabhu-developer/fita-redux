import { createSlice } from "@reduxjs/toolkit";

export const productSlicer = createSlice({
    name: 'productData',
    initialState: ['Coffee', 'Tea', 'Juice', 'Drinks'],
    reducers: {
        setProductData: (state) => {
            return state
        }
    }
})