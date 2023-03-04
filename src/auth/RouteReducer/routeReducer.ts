/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { totalmem } from 'os';

interface RouteReducer {
    routeNumber: number
    progressTracker:number
    totalRoomsInArea:number[]
}

const initialState: RouteReducer = {
    routeNumber: 1,
    progressTracker: 1,
    totalRoomsInArea: [3, 2, 6, 2, 3, 7, 1],
};

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setRouteNumber(state, { payload }: PayloadAction<number>) {
            state.routeNumber = payload;
            state.progressTracker = 1;
        },

        setProgressTracker(state, { payload }: PayloadAction<number>) {
            state.progressTracker = payload;
        },
        incrementProgressTracker(state) {
            if (state.routeNumber < state.totalRoomsInArea.length) {
                if (state.totalRoomsInArea[state.routeNumber - 1] > state.progressTracker) {
                    state.progressTracker += 1;
                } else {
                    state.progressTracker = 1;
                    state.routeNumber += 1;
                }
            }
        },
        decrementProgressTracker(state) {
            if (state.routeNumber > 1 || (state.routeNumber === 1 && state.progressTracker > 1)) {
                if (state.progressTracker > 1) {
                    state.progressTracker -= 1;
                } else {
                    state.progressTracker = state.totalRoomsInArea[state.routeNumber - 2];
                    state.routeNumber -= 1;
                }
            }
        },
},
});

export const {
    setRouteNumber,
    setProgressTracker,
    incrementProgressTracker,
    decrementProgressTracker,
} = routeSlice.actions;

export default routeSlice.reducer;
