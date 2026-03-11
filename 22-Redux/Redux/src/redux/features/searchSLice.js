import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loding:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
          state.query =action.payload
        },
        setActiveTabs(state,action){
          state.activeTab =action.payload

        },
        setResultes(state,action){
          state.loding = false
          state.results =action.payload
            
        },
        setLoading(state,action){
          state.loding = true
          state.error = null
       
        },
       setError(state,action){
          state.error = action.payload
          state.loding = false
        },
        clearResultes(state,action){
          state.results = []
          
        }

    }
})

export const {setQuery,setActiveTabs,setResultes,setLoading,setError} = searchSlice.actions
export default searchSlice.reducer