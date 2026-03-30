import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlicer'
import userReducer from '../user/userSlicer'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer
    }
})

export default store