import axios from "axios"
import { useState } from "react";

const Delete = ( {movieData} ) =>{

    const API_URL="https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=key4quh96AxbVXmTp"

    const[toggleFetch, setToggleFetch] =useState(false);


    const deleteFromList =async () =>{
        console.log("deleting");
        await axios.delete(`${API_URL}&records[]=${movieData.id}`);

        setToggleFetch(!toggleFetch);
    };


    return(
        <div>
            <button onClick={deleteFromList}>Delete</button>
        </div>
    )
}
export default Delete