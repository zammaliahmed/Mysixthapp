import {useState} from 'react'
import Filter from './components/Filter'
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {title: "Shutter Island", description:"Psycho", posterUrl:"https://lh3.googleusercontent.com/proxy/fkuwMGsVq_AP8gyXxYaGCxcjYdGLom0Qm6fYZc5DImCfxJlJm-G1R4k3CYy0kEvfTKxTssWg7zLmvuETjWAlu8cW8ASGVaUmWrBB-WUtJ94lDeI", rate:"9,8"},
    {title: "Prison Break", description:"Américain, Aventure, Suspense", posterUrl:"https://www.silence-moteur-action.com/wp-content/uploads/2015/06/prison-break.jpg", rate:"8"},
    {title: "La casa de Papel", description:"Spanish,Suspense, Fiction", posterUrl:"https://www.mondedesgrandesecoles.fr/wp-content/uploads/la-casa-de-papel-2.jpg", rate:"8,5"},

  ]);

  const [show, setShow] = useState(false) 

    const submitting = e => {
      e.preventDefault();
      setMovies([
        ...movies,
        {
          title: document.getElementsByName("title")[0].value, description: document.getElementsByName("descri")[0].value,
           posterUrl: document.getElementsByName("posterUrl")[0].value, rate: document.getElementsByName("rate")[0].value
        }
      ]);
      alert(`${document.getElementsByName("title")[0].value} is added!`)
  }

  return (
    <div className="App">
      <div >
        <h1 className="Titre1"> Movie Application </h1>
      	<button className="btn" onClick={() => setShow(!show)}>Add a Movie</button>
        {show && (
          <>
            <form onSubmit={submitting} >
              <label>Movie Title : <input type="text" name="title" /></label>
              <label>Description : <input type="text" name="descri" /></label>
              <label>PosterUrl : <input type="text" name="posterUrl" /></label>
              <label>Rate : <input type="text" name="rate" /></label>
              <input className="btn" type="submit" value="Submit" />
            </form>
          </>
        )}
      </div>
      <Filter movies={movies}/>
    </div>
  );
}
export default App;