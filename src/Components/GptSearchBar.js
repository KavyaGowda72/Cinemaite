import React, { useRef } from 'react'
import lang from '../Utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/openai'
import { json, useRouteError } from 'react-router-dom'
import {API_OPTIONS} from '../Utils/constants'
import { gptMovieResults } from '../Slices/GptSlice'

const GptSearchBar = () => {
    const language=useSelector(store=>store.config.lang)
    const serachText=useRef(null)
    const err=useRouteError()
    const dispatch=useDispatch()

    const searchMovieInTmdb = async (movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS )
        const json=await data.json()
        console.log(json.results)
        return json.results
        

    }

    const handleGptSearchClick=async()=>{
        console.log(serachText.current.value)

        //Make an api call to Gpt Api and get movie results
        
     
      
        const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query : "  +serachText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya and serch for the exact name given as input";
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices){
            return <h2>{err.status}</h2>
        }
        
        //console.log(gptResults.choices[0]?.message?.content)
        //Response recieved from gpt
        const gptMovies=gptResults.choices[0]?.message?.content.split(',')
         // ['Mahal', 'Bees Saal Baad', 'Sanjog', 'Kohra', 'Jism']
        console.log(gptMovies)
       

        //This returns promise
        const promiseArray=gptMovies.map(movie=>searchMovieInTmdb(movie))
        

        const tmdbResults=await Promise.all(promiseArray)

        dispatch(gptMovieResults({movieNames:gptMovies,gptMovies:tmdbResults,}))

        //
       

    }
  return (
    <div className='pt-[10%] grid place-items-center '>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black w-1/2 grid grid-cols-12 rounded-md ' >
            <input type='text' ref={serachText} className='p-4 m-5 col-span-9 rounded-lg text-center' placeholder={lang[language].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className='bg-red-700 rounded-lg px-4 py-2 my-7 mr-7 col-span-3 text-center'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar