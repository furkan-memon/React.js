import {configureStore} from '@reduxjs/toolkit'
import searchreducer from './features/searchSLice'
export const store = configureStore({
    reducer:{
        search:searchreducer,
    }
})
