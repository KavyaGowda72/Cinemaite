import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieRecommendation = () => {
  const gpt=useSelector(store=>store.gpt)
  const{movieNames,gptMovies}=gpt

  
  if(!movieNames) return <div className='flex justify-center mt-10'> 
  <div className='bg-black flex w-72   md:w-1/3 m-4 justify-center rounded-lg   '>
    <h1 className=' p-1 m-1 md:m-2 text-white text-xl '>No Movies Found</h1>
  </div> 
  </div>
  if(!gptMovies) return <div className='flex justify-center mt-10'> 
  <div className='bg-black flex w-80   md:w-1/3 m-4 justify-center rounded-lg   '>
    <h1 className=' p-1 m-1 md:m-2 text-white text-xl '>No Movies Found</h1>
  </div> 
  </div>
  



  return (
    <div className='p-6 my-10  bg-black w-screen  opacity-90'>
      <div>
       {movieNames.map((movieName,index)=>
        <MovieList key={movieName} title={movieName} movies={gptMovies[index]}/>
      )}
      </div>


      <h2 className='text-white text-center text-xl p-4 m-4'>End of Results...</h2>
      
    </div>
  )
}

export default GptMovieRecommendation