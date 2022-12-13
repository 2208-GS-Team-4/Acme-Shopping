import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    allMensProducts: [],
    allWomensProducts: [],
    singleProduct:{},
    genderProducts:[],
    categoryProducts:[]
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setAllMensProducts: (state, action) => {
            state.allMensProducts = action.payload;
        },
        setAllWomensProducts: (state, action) => {
            state.allWomensProducts = action.payload;
        },
        setSingleProduct: (state, action) => {
            state.singleProduct = action.payload;
        },
        setGenderProducts: (state,action) => {
            state.genderProducts = action.payload
        },
        setCategoryProducts: (state,action) => {
            state.categoryProducts = action.payload
        }
    }
})

export const { 
    setAllProducts,
    setAllMensProducts,
    setAllWomensProducts,
    setSingleProduct,
    setGenderProducts,
    setCategoryProducts
} = productSlice.actions;

export default productSlice.reducer;