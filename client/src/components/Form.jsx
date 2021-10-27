import { useState } from "react";
// import { Route } from "react-router-dom";
import axios from "axios";
import Post from "./Post";


const API_URL= "https://imdb-api.com/en/API/Search"

const Form = () =>{
    const [movie, setMovie] = useState("");
    const [movieResults, setMovieResults] = useState([]);
  
    

    const handleSubmit = async(ev) =>{
        ev.preventDefault(); 
            const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}/${movie}`)

            setMovieResults(resp.data.results);
            setMovie("")
    }
    
  
return (    
    <div>

        <form onSubmit={handleSubmit}>          
            <label htmlFor="movie-search">Search a Movie: </label>
            <input type="text" id="movie-search" placeholder="Search for a movie" onChange={(ev) => setMovie(ev.target.value)} value={movie}></input>
            <button type="submit">Search</button>         
        </form>
        {/* <Route path="/search"> */}
        <div className="movies">
        {movieResults?.map ((movie) => (
            <div className="movie_div" key={movie.id}>
            <h1 >{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
            <p>{movie.year} {movie.description}</p>
            <Post 
            movie ={movie}/>
         </div>
        ))}        
        </div>
        {/* </Route> */}
    

    </div>
    )

}
export default Form
