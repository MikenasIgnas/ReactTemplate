/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { totalmem } from 'os';

interface RouteReducer {
    floorNumber?: number
    premiseName?: string
    duty?:string
}

const initialState: RouteReducer = {

};

const checklistSlice = createSlice({
    name: 'floor',
    initialState,
    reducers: {
        setFloorNumber(state, { payload }: PayloadAction<number | undefined>) {
            state.floorNumber = payload;
        },
        setPremiseName(state, { payload }: PayloadAction<string | undefined>) {
            state.premiseName = payload;
        },
        setDutyInArea(state, { payload }: PayloadAction<string | undefined>) {
            state.duty = payload;
        },
},
});

export const {
    setFloorNumber,
    setPremiseName,
    setDutyInArea,
} = checklistSlice.actions;

export default checklistSlice.reducer;
