import { createSlice } from "@reduxjs/toolkit";

const tvSlice=createSlice({
    name:"tvShows",
    initialState:{
        tvTrailer:null,
    },
    reducers:{

        addTvShowTrailer:(state,action)=>{
            state.tvTrailer=action.payload
        }
    }
})

export default tvSlice.reducer
export const{addTvShowTrailer}=tvSlice.actions