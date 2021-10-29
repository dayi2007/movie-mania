import axios from "axios"
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Post =({movie})=>{

    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`


    
    const image = movie.image;
    const title = movie.title;
    const year = movie.year;
    const description = movie.description;
    const [toggleFetch, setToggleFetch] =useState(true);
    const[redirectSelect, setRedirectSelect] = useState(false) ;


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
        setRedirectSelect(true);
    // alert("movie has been added to your list")
    }

    if (redirectSelect){
        return <Redirect to="/"/>
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