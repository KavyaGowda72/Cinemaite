import { useEffect } from "react"
import { API_OPTIONS } from "../../../Utils/constants"
import { useDispatch } from "react-redux"
import { addPeoplePopular } from "../../../Slices/movieSlice"



const usePeoplePopular=()=>{

    const dispatch=useDispatch()

    const getPeoplePopular=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",API_OPTIONS)
        const json=await data.json();

        dispatch(addPeoplePopular(json.results))
       
    }


    useEffect(()=>{
        getPeoplePopular()
    },[])

}

export default usePeoplePopular