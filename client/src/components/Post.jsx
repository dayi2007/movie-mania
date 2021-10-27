import axios from "axios"
import { useParams, Route, Link } from "react-router-dom";
import { useState } from "react";

const Post =({movie_id})=>{

    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.AIRTABLE_API_KEY}`
    
    const[image, setImage] =useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("") ;
    const params = useParams();


    const selectMovie =async(ev)=> {
        const movie_id = params.movie.id

        const getMovieData ={
            records: [
                { 
                id: movie_id,
                    fields: {
                        title,
                        image,
                        description
                    }
                }
            ]
        }
        await axios.put(API_URL, getMovieData);
    }

    return(
        <div>
            <Link to={`/select/${movie_id}`}>
            <button className="select" onClick={(ev) => selectMovie}>
                Select
                </button>
            </Link>
        </div>
    )



}
export default Post