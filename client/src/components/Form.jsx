import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";



const API_URL= "https://imdb-api.com/en/API/Search"

const Form = ({setMovieResults}) =>{

    const[movie, setMovie] = useState("");
    const[toggleFetch, setToggleFetch] =useState(true);
    const[redirectSelect, setRedirectSelect] = useState(false) ;
    let history = useHistory();
    

    const handleSubmit = async(ev) =>{
        ev.preventDefault(); 
            const resp = await axios.get(`${API_URL}/${process.env.REACT_APP_API_KEY}/${movie}`)
            setMovieResults(resp.data.results);    

            setToggleFetch(!toggleFetch);            
            setRedirectSelect(true);
            setMovie("")
        }
             
            function handleClick() {
              history.push("/select");
            }
            if (redirectSelect){
            handleClick()    }
        
  
return (    
    <div>

        <form onSubmit={handleSubmit}>  
   
            <label htmlFor="movie-search">Search a Movie: </label>
            <input type="text" id="movie-search" placeholder="Search for a movie" onChange={(ev) => setMovie(ev.target.value)} value={movie}></input>         
            <button type="submit" id="movie-search-bttn" ><span>Movie Lookup</span><span>Search</span></button>      
        </form>        


    </div>
    )

}
export default Form
