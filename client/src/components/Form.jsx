import { useState } from "react";
import axios from "axios";
// import Select from "./Select";
// import { Redirect, Route } from "react-router-dom";
import App from "../App";


const API_URL= "https://imdb-api.com/en/API/Search"

const Form = () =>{
    const [movie, setMovie] = useState("");
    const [movieResults, setMovieResults] = useState([]);
    const[toggleFetch, setToggleFetch] =useState(true);
    // const[redirectSelect, setRedirectSelect] = useState(false) ;
  
    

    const handleSubmit = async(ev) =>{
        ev.preventDefault(); 
            const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}/${movie}`)

            setMovieResults(resp.data.results);
            setMovie("")

            // setRedirectSelect(true);
            setToggleFetch(!toggleFetch);
    }
    // if (redirectSelect){
    //     return <Redirect to="/search"/>
    // }
    
  
return (    
    <div>

        <form onSubmit={handleSubmit}>  
   
            <label htmlFor="movie-search">Search a Movie: </label>
            <input type="text" id="movie-search" placeholder="Search for a movie" onChange={(ev) => setMovie(ev.target.value)} value={movie}></input>         
            <button type="submit" id="movie-search-bttn">Search</button>    
  
        </form>

        <App
            setMovieResults = {setMovieResults}
            movieResults = {movieResults}/>
            


    </div>
    )

}
export default Form
