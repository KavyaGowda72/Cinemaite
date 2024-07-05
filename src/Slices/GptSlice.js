import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        movieNames:null,
        
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        
        gptMovieResults:(state,action)=>{
            const{gptMovies,movieNames}=action.payload
            state.gptMovies=gptMovies
            state.movieNames=movieNames
            
            
        },

        clearMovies:(state)=>{
            
            state.gptMovies=null
            state.movieNames=null
        }
        
    }
})


export const{toggleGptSearchView,gptMovieResults,clearMovies}=GptSlice.actions
 export default GptSlice.reducer
 