import axios from "axios"
import { useState } from "react";

const Post =({movie})=>{

    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`


    
    const image = movie.image;
    const title = movie.title;
    const year = movie.year;
    const description = movie.description;
    const [toggleFetch, setToggleFetch] =useState(true);


    const selectMovie =async(ev)=> {
        ev.preventDefault();
        console.log("You Selected that movie") 
        console.log(movie) 


        console.log({title})
        const getMovieData ={
            records: [
                { 
                    fields: {
                        title,
                        image,
                        year,
                        description,
                    }
                }
            ]
        }

    await axios.post(API_URL, getMovieData);
    setToggleFetch(!toggleFetch);
    }

    return(
        <div>
            <button className="select_button" onClick={selectMovie}>
                <span>Add it to My List</span><span>Want to Watch</span>
            </button>
        </div>
    )



}
export default Post