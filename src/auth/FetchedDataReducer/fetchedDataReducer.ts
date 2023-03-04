/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { totalmem } from 'os';
import {
 PossibleProblemsType, RouteType, AreaType, TodoType,
} from '../../types/globalTypes';

interface PossibleProblemsReducer {
    possibleProblems: PossibleProblemsType[]
    Routes: RouteType[]
    Areas: AreaType[]
    ToDo: TodoType[]

}

const initialState: PossibleProblemsReducer = {
    possibleProblems: [],
    Routes: [],
    Areas: [],
    ToDo: [],
};

const fetchedDataReducer = createSlice({
    name: 'fetchedDataReducer',
    initialState,
    reducers: {
        setPossibleProblems(state, { payload }: PayloadAction<PossibleProblemsType[]>) {
            state.possibleProblems = payload;
        },
        setRoute(state, { payload }: PayloadAction<RouteType[]>) {
            state.Routes = payload;
        },
        setTodo(state, { payload }: PayloadAction<TodoType[]>) {
            state.ToDo = payload;
        },
        setArea(state, { payload }: PayloadAction<AreaType[]>) {
            state.Areas = payload;
        },

},
});

export const {
    setPossibleProblems,
    setRoute,
    setTodo,
    setArea,
} = fetchedDataReducer.actions;

export default fetchedDataReducer.reducer;
