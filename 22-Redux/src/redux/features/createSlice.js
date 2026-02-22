import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 10,
}
export const counterReducer = createSlice({
    name:'counter',
    initialState ,
    reducers:{
        increment:(state)=>{
       state.value += 1
        },
       decrement: (state) => {
  if (state.value > 0) {
    state.value -= 1;
  }
}
}})

export const {increment,decrement} = counterReducer.actions
export default counterReducer.reducer