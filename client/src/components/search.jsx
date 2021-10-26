import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import React from "react";
import Select from "./Select";



const API_URL= "https://imdb-api.com/en/API/Search"
// 2007
 const API_KEY= "k_uqk2e0we"
//prin
// const API_KEY= "k_qrkqdxq0"

const Search = ( {movie} ) =>{
    const [toggleFetch, setToggleFetch] = useState(true);
    const [movieSearch, setMovieSearch] = useState([]);
    // const [movie, setMovie] = useState([]);


    useEffect (() => {
        console.log("Getting Started");  
        const getMovie = async () => {
        const resp = await axios.get(`${API_URL}/${API_KEY}/${movie}`)
        console.log(resp.data.results);
        setMovieSearch(resp.data.results);
      }
      getMovie();
    }, [toggleFetch]);



    return(
        <div>
          <h1>Search page </h1>
            {movieSearch.map((movie) =>( 
          <div>
            <h1 key={movie.id}>{movie.title}</h1> 
            <img src={movie.image} alt={movie.title}/>
            <Select/>
         </div>
         ))} 
       </div> 

    )
}
export default Search