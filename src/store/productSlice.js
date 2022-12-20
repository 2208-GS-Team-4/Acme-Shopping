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
        },
        updateSelectedProduct: (state, action) => {
            const updatedProductInfo = action.payload;
            const oldProductInfo = state.singleProduct;
            state.singleProduct = {
                ...oldProductInfo,
                ...updatedProductInfo
            };
        },
    }
})

export const { 
    setAllProducts,
    setAllMensProducts,
    setAllWomensProducts,
    setSingleProduct,
    setGenderProducts,
    setCategoryProducts,
    updateSelectedProduct
} = productSlice.actions;

export default productSlice.reducer;