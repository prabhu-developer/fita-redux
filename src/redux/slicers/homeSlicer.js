import { createSlice } from "@reduxjs/toolkit";

const defaultValues = JSON.parse(localStorage.getItem('homeData')) || ['Cars', 'Bikes', 'Bus']


export const homeSlicer = createSlice({
    name: 'homeData',
    initialState: defaultValues,
    reducers: {
        addHomeData: (state, action) => {
            const currentData = [...state, action.payload]
            localStorage.setItem('homeData', JSON.stringify(currentData))
            return currentData
        },
        removeHomeData: (state, action) => {
            const currentData = state.filter(item => item !== action.payload);
            localStorage.setItem('homeData', JSON.stringify(currentData))
            return currentData
        },
        clearHomeData: () => {
            localStorage.setItem('homeData', JSON.stringify([]))
            return [];
        }
    }
})

export const { addHomeData, removeHomeData, clearHomeData } = homeSlicer.actions