import {createSlice} from '@reduxjs/toolkit'

const initialState={
    count:0
}

const counterSlicer = createSlice({
    name:'countor',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})

export const {increment,decrement,incrementByAmount}=counterSlicer.actions

export default counterSlicer.reducer