import { createSlice } from "@reduxjs/toolkit";
export const CounterSlide = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});
export const { increment, decrement, incrementByAmount } = CounterSlide.actions;
export default CounterSlide.reducer;
