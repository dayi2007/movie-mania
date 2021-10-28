import Post from "./Post";
import { Route } from "react-router-dom";

const Select =({setMovieResults,  movieResults})=>{

     console.log(movieResults)


    return(
        <div>  
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
  
        </div>
    )
}
export default Select