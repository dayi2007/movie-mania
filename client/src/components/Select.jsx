import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";

const Select =()=>{
    
    // const API_URL_Movies_ID= `https://imdb-api.com/en/API/Title/${API_KEY_IMDB}/${ID}}`
    // const API_KEY_IMDB= "k_uqk2e0we"

    const API_KEY="key4quh96AxbVXmTppost"
    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${API_KEY}`
    
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
            <Link to={``}
            <button className="select" onClick={(ev) => selectMovie}>Select</button>
        </div>
    )
}
export default Select