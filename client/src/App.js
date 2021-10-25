import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Search from './components/Search';

const API_URL= "https://imdb-api.com/en/API/SearchMovie"
// const API_URL= "https://imdb-api.com/en/API/Search"
const API_KEY= "k_uqk2e0we"

function App() {

  const [toggleFetch, setToggleFetch] = useState(true);
  const [movieSearch, setMovieSearch] = useState([]);
  const [movie, setMovie] = useState([]);



  useEffect (() => {
    console.log("Getting Started");  
    const getMovies = async () => {
    const resp = await axios.get(`${API_URL}/${API_KEY}/inception`)
    console.log(resp.data.results);
    setMovieSearch(resp.data.results);
  }
  getMovies();
}, [toggleFetch]);


  return (
    <div className="App">
      <nav>
        <form>
          <div>
              <label for="site-search">Search a Movie: </label>
              <input type="search" id="site-search" placeholder="Search for a movie" value={movie}></input>
              <button>Search</button>
          </div>
        </form>

        <Link to="/"exact>Home</Link><br/>
        <Link to="/list">My List</Link>
      </nav>
 
      {/* <div display={(movieSearch  === true) ? true : "no titles" } > */}
        {movieSearch.map((movie) =>( 
          <div>
            <h1 key={movie.id}>{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
         </div>
        ))} 
      {/* </div> */}
    </div>
  );
}

export default App;
