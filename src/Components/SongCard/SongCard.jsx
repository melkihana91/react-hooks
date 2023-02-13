import React from 'react';
import { Card  } from 'react-bootstrap'

     const SongCard = ( {song}) => {
  return (

    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= { song.img} alt= { song.titel}  width="450px " heigth="400px" />
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Text>
          {song.gener}
        </Card.Text>
        </Card.Body>
       
        </Card >
      
      </div>
       
  );
}

export default SongCard ;
