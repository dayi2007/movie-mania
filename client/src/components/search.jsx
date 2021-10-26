import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import React from "react";
import Select from "./Select";



const API_URL= "https://imdb-api.com/en/API/Search"


const Search = ( {movie} ) =>{
    const [toggleFetch, setToggleFetch] = useState(true);
    const [movieSearch, setMovieSearch] = useState([]);
    // const [movie, setMovie] = useState([]);


    useEffect (() => {
        console.log("Getting Started");  
        const getMovie = async () => {
        const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}/${movie}`)
        console.log(resp.data.results);
        setMovieSearch(resp.data.results);
      }
      getMovie();
    }, [toggleFetch]);



    return(
          
        <div className="movies">
          {movieSearch.map((movie) =>( 
          <div className="movie_div">
            <h1 key={movie.id}>{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
            <Select
            key ={movie.id}
            />
         </div>
         ))} 
       </div> 
    

    )
}
export default Search