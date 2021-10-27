import axios from "axios"
import { useState, useEffect } from "react";

const List = () =>{
    const [movies, setMovies] = useState();
    const[toggleFetch] =useState(true);
 
    const API_URL="https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=key4quh96AxbVXmTp"
    
    useEffect (() => {
    const listMovies = async () => {
      const resp = await axios.get(API_URL)
    //   console.log(resp.data.records);
        setMovies(resp.data.records)
    }
    listMovies();
  }, [toggleFetch]);


    return(
        <div className="movies">
            {movies?.map ((movie) => (
                 <div className="movie_div">
                <h4>{movie.fields.title}</h4>
                <img src={movie.fields.image} alt={movie.fields.title}/>
                <p>{movie.fields.year}</p>
                <p>{movie.fields.description}</p>
                </div> 
            ))}
        </div>
    )
} 
export default List