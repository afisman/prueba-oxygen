import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedConversions: [],

}

export const conversionSlice = createSlice({
    name: 'conversionSaver',
    initialState,
    reducers: {
        saveConversion: (state, action) => {
            const newConversion = action.payload;

            state.savedConversions = [...state.savedConversions, newConversion]

        },
        deleteConversion: (state, action) => {
            state.savedConversions = state.savedConversions.filter(conversion => conversion.id !== action.payload)
        },

    },

},
)

export const conversionActions = conversionSlice.actions

export default conversionSlice.reducer