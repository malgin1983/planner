import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0,
        data: {
            id: 1,
            email: '',
            first_name: '',
            last_name: '',
            avatar: '',
        },
        support: {
            url: '',
            text: '',
        },
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1;
        },
        decriment(state) {
            state.count = state.count - 1;
        },
        addData(state, action) {
            state.data = action.payload;
        },
    },
});

export default countSlice.reducer;
export const { increment, decriment, addData } = countSlice.actions;
