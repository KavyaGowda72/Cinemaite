import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../Slices/movieSlice"


const useTopRatedMovies=()=>{
    const dispatch=useDispatch()
    const topratedMovies=useSelector(store=>store.movies.topRatedMovies)

    const getTopRatedMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()

        dispatch(addTopRatedMovies(json.results))
        

    }

    useEffect(()=>{
        !topratedMovies && getTopRatedMovies()
        
    },[])

}
export default useTopRatedMovies