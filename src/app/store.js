import { configureStore } from "@reduxjs/toolkit"
import  languagesReducers  from "../apis/languageSlice"

export const store = configureStore({
    reducer:{
       language:languagesReducers,
    },
})