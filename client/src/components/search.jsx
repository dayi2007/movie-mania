import axios from "axios";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";


const API_URL= "https://imdb-api.com/en/API/Search"
const API_KEY= "k_uqk2e0we"

const Search = () =>{


    useEffect (() => {
        console.log("Getting Started");  
        const getMovies = async () => {
        const resp = await axios.get(`${API_URL}/${API_KEY}/inception`)
        console.log(resp.data.results);
        setMovieSearch(resp.data.results);
      }
      getMovies();
    }, [toggleFetch]);



    return(
        <div>

            {movieSearch.map((movie) =>( 
          <div>
            <h1 key={movie.id}>{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
         </div>
        ))} 
       </div> 

    )
}
export default Search