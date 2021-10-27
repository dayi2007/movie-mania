import axios from "axios"
import {  Route, Link } from "react-router-dom";
import { useState } from "react";

const Post =({movie})=>{

    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.AIRTABLE_API_KEY}`
    
    const[image, setImage] =useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("") ;



    const selectMovie =async(ev)=> {
        console.log("You Selected that movie") 

        const getMovieData ={
            records: [
                { 
                    fields: {
                        title: {title},
                        image: {image},
                        description: {description},
                    }
                }
            ]
        }
        setTitle(movie.title);
        setImage(movie.image)
        setDescription(movie.description)
        await axios.post(API_URL, getMovieData);
    }

    return(
        <div>
            {/* <Link to={`/select/${movie}`}> */}
            <button type="submit" className="select" onClick={selectMovie}>
                Select
                </button>
            {/* </Link> */}
        </div>
    )



}
export default Post