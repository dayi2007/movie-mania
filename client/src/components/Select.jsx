import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";
import Post from "./Post";

const Select =()=>{

    const API_URL_Movies_ID = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/`
   

    // const API_KEY="key4quh96AxbVXmTppost"
    // const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${API_KEY}`
    
    const[image, setImage] =useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("") ;
    const params = useParams();
    console.log(params.movie)

    const selectMovie =async(ev)=> {
        console.log("selection")
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
        await axios.put(`${API_URL_Movies_ID}${movie_id}`, getMovieData);
    }
    // <Post movie_id ={selectMovie}/>
    return(
        <div>
            <button className="select" onClick={selectMovie}>Select</button>
        </div>
    )
}
export default Select