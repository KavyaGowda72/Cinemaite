import { useEffect } from "react"
import { API_OPTIONS } from "../../../Utils/constants"
import { useDispatch } from "react-redux"
import { addTvShowTrailer } from "../../../Slices/tvSlice"

const useTvTrailer=()=>{
    const dispatch=useDispatch()

    const getTvTrailer= async()=>{
       
        const data=await fetch("https://api.themoviedb.org/3/tv/1399/videos?language=en-US",API_OPTIONS)
        const json=await data.json()
        
        const filteredData=json.results.filter(trailer=>trailer.type === "Trailer")
        console.log("filteredData",filteredData)

        // const trailer=filteredData.length?filteredData[0]:json.results[0]

        dispatch(addTvShowTrailer(filteredData))

    }

    useEffect(()=>{
        getTvTrailer()
    },[])
}
export default useTvTrailer