import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ Movies ,title , rate }) {
  return (
   <div className='movielists'
         style={{display:"flex",
         justifyContent:"space-between",
         flexWrap:"wrap",
         margin:"auto",
         width:"90%",
         paddingBottom:"20px",
         paddingTop:"50px",
        

         }} >

      {
      Movies.filter(
        Movies => Movies.title.toLowerCase().includes(title.toLowerCase().trim()) && Movies.rate >=  rate 
        ).map(Movies=> (
      <MovieCard Movies={ Movies } key={Movies.id} />)
  
       )} ;
       </div>
  )
  }
export default MovieList 