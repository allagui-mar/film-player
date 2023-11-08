
// component CardFilm.js
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

function CardFilm({film}) {
 const navigate=useNavigate();
  return (
   <div className='card'>

    <div className='film-card'onClick={()=>navigate('/Descreption/'+film.id)} >
       <h2>{film.title}</h2>
        <p>{film.descreption}</p>
        <img src={film.posterURL} alt={film.title} style={{width:'500px'}}/>
        <p>Rating : {film.rating}</p>
    </div>
    </div>
   
  );
}

export default CardFilm;
