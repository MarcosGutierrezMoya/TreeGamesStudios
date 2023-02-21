import { createSlice } from "@reduxjs/toolkit";


export const language = createSlice({
    name: "Language",
    initialState: {idioma:"Español"},
    reducers: {
        changeLanguage: (state, action) => {
            state.idioma = action.payload;
        }
    }
})

export const { changeLanguage } = language.actions;

export default language.reducer;