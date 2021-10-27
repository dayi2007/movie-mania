import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Form from './components/Form.jsx';
import Post from './components/Post';
import List from './components/List';

// const API_URL= "https://imdb-api.com/en/API/SearchMovie"
// const API_URL= "https://imdb-api.com/en/API/Search"
const API_URL= "https://imdb-api.com/en/API/MostPopularMovies"

function App() {

  const [toggleFetch, setToggleFetch] = useState(true);
  const [movieSearch, setMovieSearch] = useState([]);
   

  useEffect (() => {
    console.log("Getting Started");  
    const getMovies = async () => {
    const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}`)
     console.log(resp.data.items[10]);
    setMovieSearch(resp.data.items);
  }
  getMovies();
}, [toggleFetch]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/list">My List</Link>
        <Route> <Form /> </Route>
      </nav>

      <Route path="/" exact>
        <h1>Home page</h1>
        <div className="movies">
            {movieSearch?.map((movie) =>( 
          <div className="movie_div"  key={movie.id}>
            <h1>{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
            <Post 
            movie={movie}/>
         </div>
      ))}  
      </div> 
     </Route>

     {/* <Route path="/search/" exact>
       <Form />  
     </Route> */}

     <Route path="/list" exact>
      <h1>My List</h1>
        <List/>
     </Route>

    </div>
  );
}

export default App;
