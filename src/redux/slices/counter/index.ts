import { createSlice } from "@reduxjs/toolkit";

const num = 0;

export const counterSlice = createSlice({
  
    initialState : num,
    name : "counter",
    reducers : {
        increment : (state)=> state + 1,
        decrement : (state)=> state - 1,
    },
});

export const { increment , decrement } = counterSlice.actions;
export default counterSlice.reducer;