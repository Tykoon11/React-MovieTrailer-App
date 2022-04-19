import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div style={{marginTop: 20, display: "grid", gridTemplateColumns:"1fr 1fr 1fr", gridGap: 30}}>
      {movies.map((movie, key) => (
          <MovieCard movie={movie} key={key}/>
      ) )}

    </div>
  )
}

export default MovieList
