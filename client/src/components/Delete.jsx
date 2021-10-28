import axios from "axios"
import { useState } from "react";

const Delete = ( {movieData} ) =>{

    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`

    const[toggleFetch, setToggleFetch] =useState(false);


    const deleteFromList =async () =>{
        console.log("deleting");
        await axios.delete(`${API_URL}&records[]=${movieData.id}`);

        setToggleFetch(!toggleFetch);
    };


    return(
        <div>
            <button className="select_button" onClick={deleteFromList}>Watched</button>
        </div>
    )
}
export default Delete