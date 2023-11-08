
import React, { useState } from 'react';
import filmsData from './Films';
import Chercher from './Chercher'
import CardFilm from './CardFilm';

function ListFilm() {
     
    const [films, setfilms] = useState(filmsData);
    const [chercher,setChercher]=useState('');
    const [newFilm,setNewFilm]=useState({ id:'',title:'',descreption:'',rating:'',posterURL:'', trailerLink:'',})
    // cherched Films
    const cherchedFilms = films.filter(film =>
      film.title.toLowerCase().includes(chercher.toLowerCase()) ||
      film.rating.toString().toLowerCase().includes(chercher.toLowerCase())
      );
    //input change 
    const handleInputChange=(event)=>{
      setNewFilm({...newFilm,[event.target.name]:event.target.value})
    };
    //form submit
    const handleFormSubmit=(event)=>{
      event.preventDefault();
      setfilms([...films,newFilm]);
      setNewFilm({ id:'',title:'',descreption:'',rating:'',posterURL:'', trailerLink:'',});
    };
  
  return (
    <div>
      <Chercher onFilterChange={setChercher}/>
      {cherchedFilms.map((film,index)=>(
        <CardFilm key={index} film={film}/>
      ))}
      <form className="add-film-form" onSubmit={handleFormSubmit}>
          <input name='id' value={newFilm.id} onChange={handleInputChange} placeholder="Id"/>
          <input name='title' value={newFilm.title} onChange={handleInputChange} placeholder="Title"/>
          <input name='descreption' value={newFilm.descreption} onChange={handleInputChange}placeholder="Descreption"/>
          <input name="rating" value={newFilm.rating} onChange={handleInputChange} placeholder='Rating'/>
          <input name='posterURL' value={newFilm.posterURL} onChange={handleInputChange} placeholder="posterURL image film"/>
          <input name="trailerLink" value={newFilm.trailerLink} onChange={handleInputChange} placeholder='link de film '/>
         <button type='submit'>Add film</button>
      </form>
    </div>
  );
}

export default ListFilm;
