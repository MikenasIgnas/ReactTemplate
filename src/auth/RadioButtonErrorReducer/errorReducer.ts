/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { error } from 'console';

interface ErrorReducer {
   error:boolean
   selectedNoValue:boolean
   selectedYesValue:boolean
}

const initialState: ErrorReducer = {
    error: false,
    selectedNoValue: false,
    selectedYesValue: false,
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setRadioButtonError(state, { payload }: PayloadAction<{ error: boolean, selectedNoValue: boolean, selectedYesValue: boolean }>) {
            state.error = payload.error;
            state.selectedNoValue = payload.selectedNoValue;
            state.selectedYesValue = payload.selectedYesValue;
        },

    },
});

export const {
    setRadioButtonError,
} = errorSlice.actions;

export default errorSlice.reducer;
