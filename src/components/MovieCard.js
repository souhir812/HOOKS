import React from 'react'; 
import { Button, Card } from 'react-bootstrap';
import Movies from './MovieList.js';

export default function MovieCard({ Movies })

 {
  return (
   <Card style={{width: '18rem'}}>
  <Card.Img
        variant="top"
           src={Movies.posterUrl}  
           alt='MovieCard'
           width='100%'
           height='200px'
            />
  <Card.Body>
   <Card.Title> { Movies.title } </Card.Title>
   

    <Card.Text>
      { Movies.description}
   </Card.Text>
  
    <Button variant="primary">
      WATCH
    </Button>
    <Card.Title> { "⭐".repeat(Movies.rate) } </Card.Title>
  </Card.Body>
  

</Card>
  )
}