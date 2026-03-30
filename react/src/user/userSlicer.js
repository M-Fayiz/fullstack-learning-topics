import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState ={
    users:[],
    loading:false,
    err:null
}

export const fetchUser=createAsyncThunk(
    'users/fetchUsers',

    async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        return await res.json()
    }
)

const userSlicer = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.users = action.payload
            state.loading =false
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.err = action.error.message
            state.loading = false
        })
    }
})

export default userSlicer.reducer