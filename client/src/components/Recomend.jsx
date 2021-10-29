import axios from "axios"
import { useState, useEffect } from "react";
import Delete from "./DeletePerm";

const Recomend = () =>{
    const [movies, setMovies] = useState();
    const[toggleFetch] =useState(true);
 
    const API_URL=`https://api.airtable.com/v0/appp3kAXOCokemuoE/Table%201?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    
    useEffect (() => {
    const RecomendMovies = async () => {
      const resp = await axios.get(API_URL)
      setMovies(resp.data.records)

    }
    RecomendMovies();
  }, [toggleFetch]);


    return(
        <div className="movies">
            {movies?.map ((movie) => (
                 <div className="movie_div" key={movie.id}>
                <h4>{movie.fields.title}</h4>
                <img src={movie.fields.image} alt={movie.fields.title}/>
                <p>{movie.fields.year}</p>
                <p>{movie.fields.description}</p>
                < Delete
                movieData = {movie}
                />
                </div> 
            ))}
        </div>
    )
} 
export default Recomend