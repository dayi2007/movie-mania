import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Search from "./search";

const Form = () =>{
    const [movie, setMovie] = useState(["home alone"]);
    // console.log(movie)
return (    
    <div>
        <form>          
            <label htmlFor="movie-search">Search a Movie: </label>
            <input type="search" id="movie-search" placeholder="Search for a movie" onChange={(ev) => setMovie(ev.target.value)} value={movie}></input>
            <button>Search</button>         
        </form>
        <Search 
            movie ={movie}
        />

    </div>
    )

}
export default Form
