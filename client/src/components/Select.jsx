import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";
import Post from "./Post";

const Select =({movie})=>{

    // const API_URL_Movies_ID = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/`
   

    // const API_KEY="key4quh96AxbVXmTppost"
    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.AIRTABLE_API_KEY}`
    
    const[image, setImage] =useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("") ;
    const params = useParams();
    console.log(movie)

    const selectMovie =async(ev)=> {
        console.log("selection")
         
       

        const getMovieData ={
            records: [
                { 
                    fields: {
                        title,
                        image,
                        description
                    }
                }
            ]
        }
        setTitle(movie.title);
        setImage(movie.image)
        setDescription(movie.description)
        await axios.post(API_URL, getMovieData);
    }
    // <Post movie_id ={selectMovie}/>
    return(
        <div>
            <button className="select" onClick={selectMovie}>Select</button>
        </div>
    )
}
export default Select