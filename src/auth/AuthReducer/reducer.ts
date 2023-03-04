/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthReducer {
    id?: string,
    username?: string,
    secret?:string,
    routeNumber: number
}

const initialState: AuthReducer = {
    routeNumber: 1,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, { payload }: PayloadAction<{ id: string, username: string, secret: string }>) {
            state.id = payload.id;
            state.username = payload.username;
            state.secret = payload.secret;
        },
        clearUserData() {
            return initialState;
        },
        setRouteNumber(state, { payload }: PayloadAction<number>) {
            state.routeNumber = payload;
        },
    },
});

export const {
    clearUserData,
    setUserData,
} = authSlice.actions;

export default authSlice.reducer;
