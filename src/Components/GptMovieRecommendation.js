import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieRecommendation = () => {
  const gpt=useSelector(store=>store.gpt)
  const{movieNames,gptMovies}=gpt

  
  if(!movieNames) return <div className='flex justify-center mt-10'> 
  <div className='bg-black flex  w-1/3 m-4 justify-center rounded-lg   '>
    <h1 className=' p-2 m-2 text-white text-xl '>No Movies Found</h1>
  </div> 
  </div>
  if(!gptMovies) return <div className='flex justify-center mt-10'> <div className='bg-black flex  w-1/3 m-4 justify-center   '>
  <h1 className=' p-2 m-2 text-white'>No Movies Found</h1>
</div> 
</div>



  return (
    <div className='p-6 m-4 bg-black opacity-90'>
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