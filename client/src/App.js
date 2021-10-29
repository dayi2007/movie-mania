import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Form from './components/Form.jsx';
import Post from './components/Post';
import List from './components/List';
import Select from './components/Select';
import Recomend from './components/Recomend';

// const API_URL= "https://imdb-api.com/en/API/SearchMovie"
// const API_URL= "https://imdb-api.com/en/API/Search"
const API_URL= "https://imdb-api.com/en/API/MostPopularMovies"

function App() {

  const [toggleFetch, ] = useState(true);
  const [movieSearch, setMovieSearch] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
   

  useEffect (() => {
    console.log("Getting Started");  
    const getMovies = async () => {
    const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}`)
    setMovieSearch(resp.data.items);
  }
  getMovies();
}, [toggleFetch]);

  return (
    <div className="App">
      <nav>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/list">My List</Link></li>
        <li><Link to="/recomend">Favorites</Link></li>
        <Form
           setMovieResults = {setMovieResults}
           movieResults = {movieResults} />        
      </nav>

    <div className="body">

      <Route path="/" exact>
        <h1>Now Showing</h1>
        <div className="movies" id="main-side">
            {movieSearch?.map((movie) =>( 
          <div className="movie_div"  key={movie.id}>
            <h2>{movie.title}</h2> 
            <img src={movie.image} alt={movie.title}/>
            <p>{movie.year}</p>
            <p>{movie.crew}</p>
            <Post 
            movie={movie}/>
         </div>
      ))} 
      {/* <div className="side">
        <h3>My List </h3>
        <List /> 
      </div>  */}
      </div>

     </Route>

     <Route path="/select" exact> 
     <h1>Search</h1>
        <Select
          setMovieResults = {setMovieResults}
          movieResults = {movieResults}
        />
       </Route>

     <Route path="/list" exact>
      <h1>My List</h1>
        <List/>
     </Route>

     <Route path="/recomend" exact>
      <h1>Share and Watch again</h1>
        <Recomend  />
     </Route>
     
     </div>     
  </div>
  );
}

export default App;
