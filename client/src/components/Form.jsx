import { useState } from "react";
import axios from "axios";
import Select from "./Select";

const API_URL= "https://imdb-api.com/en/API/Search"

const Form = () =>{
    const [movie, setMovie] = useState("");
    const [movieResults, setMovieResults] = useState();
    

    const handleSubmit = async(ev) =>{
        ev.preventDefault(); 
            const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}/${movie}`)
            
            setMovieResults(resp.data.results);
     
    }

return (    
    <div>
        <form onSubmit={handleSubmit}>          
            <label htmlFor="movie-search">Search a Movie: </label>
            <input type="text" id="movie-search" placeholder="Search for a movie" onChange={(ev) => setMovie(ev.target.value)} value={movie}></input>
            <button type="submit">Search</button>         
        </form>
        <div className="movies">
        {movieResults?.map ((movie) => (
            <div className="movie_div" key={movie.id}>
            <h1 >{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
            <Select 
            movie ={movie}/>
         </div>
        ))}
        </div>

    </div>
    )

}
export default Form
