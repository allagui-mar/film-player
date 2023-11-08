// component Descreption
import '../App.css';
import { useParams,useNavigate } from "react-router-dom";
import films from "./Films";
import ReactPlayer from 'react-player';


function Descreption() {
    const {id}=useParams();
    const navigate=useNavigate();
    const film=films.find(film=>film.id===id);
  return (
    <div className="film-video">
        <h3>{film.descreption}</h3>
        <h2>{film.title}</h2>
        <ReactPlayer url={film.trailerLink}   />
        <button onClick={()=>navigate('/')}>GoBack</button>
      
    </div>
  );
}

export default Descreption;
