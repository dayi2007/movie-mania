import Post from "./Post";


const Select =({setMovieResults,  movieResults})=>{

     console.log(movieResults)


    return(
        <div>  
            <div className="movies">
            {movieResults?.map ((movie) => (
            <div className="movie_div" key={movie.id}>
            <h2 >{movie.title}</h2> 
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