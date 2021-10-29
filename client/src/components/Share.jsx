import axios from "axios"
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Share =({movie})=>{

    const API_URL=`https://api.airtable.com/v0/appp3kAXOCokemuoE/Table%201?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`

console.log(movie)
    
    const image = movie.fields.image;
    const title = movie.fields.title;
    const year = movie.fields.year;
    const description = movie.description;
    const [toggleFetch, setToggleFetch] =useState(true);
    const[redirectSelect, setRedirectSelect] = useState(false) ;


    const selectMovie =async(ev)=> {
        ev.preventDefault();
        console.log("You Shared that movie") 
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
        setRedirectSelect(true);
    // alert("movie has been added to your list")
    }

    if (redirectSelect){
        return <Redirect to="/recomend"/>
    }        
       

    return(
        <div>
            <button className="select_button" onClick={selectMovie}>
                <span>Share</span><span>Love the Movie</span>
            </button>
        </div>
    )



}
export default Share