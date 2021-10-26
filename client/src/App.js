import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Search from './components/search.jsx';
import Form from './components/Form';

// const API_URL= "https://imdb-api.com/en/API/SearchMovie"
// const API_URL= "https://imdb-api.com/en/API/Search"
const API_URL= "https://imdb-api.com/en/API/MostPopularMovies"
// 2007
 const API_KEY= "k_uqk2e0we"
//prin
//const API_KEY= "k_qrkqdxq0"

function App() {

  const [toggleFetch, setToggleFetch] = useState(true);
  const [movieSearch, setMovieSearch] = useState([]);
 
  

  useEffect (() => {
    console.log("Getting Started");  
    const getMovies = async () => {
    const resp = await axios.get(`${API_URL}/${API_KEY}`)
    // console.log(resp.data.items[10]);
    setMovieSearch(resp.data.items);
  }
  getMovies();
}, [toggleFetch]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/search">Search</Link>
        <Route> <Form /> </Route>
      </nav>

      <Route path="/" exact>
      <h1>Home page</h1>
            {movieSearch.map((movie) =>( 
              <div>
            <h1 key={movie.id}>{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
         </div>
      ))}   
     </Route>

     <Route path="/search" exact>
        <Search    
        />
     </Route>

    </div>
  );
}

export default App;
