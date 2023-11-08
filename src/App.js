
import './App.css';
import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import ListFilm from './Component/ListFilm';
import Descreption from './Component/Descreption';
function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
        <Route path='/'element={<ListFilm/>}></Route>
        <Route path='/Descreption/:id'element={<Descreption/>}></Route>
        </Routes>
     </Router>
        
      
    </div>
  );
}

export default App;
