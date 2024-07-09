import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice'
import moviesReducer from '../Slices/movieSlice'
import gptReducer from '../Slices/GptSlice'
import configReducer from '../Slices/configSlice'
import tvShowReducer from '../Slices/tvSlice'


const appStore=configureStore({
     reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer,
        tvShows:tvShowReducer
        
     },
})

export default appStore