import axios from "axios"
import { useState } from "react";

const Delete = ( {movieData} ) =>{

    const API_URL=`https://api.airtable.com/v0/appp3kAXOCokemuoE/Table%201?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`

    const[toggleFetch, setToggleFetch] =useState(true);


    const deleteFromList =async () =>{
        console.log("deleting");
        await axios.delete(`${API_URL}&records[]=${movieData.id}`);

        setToggleFetch(!toggleFetch);
    };

    function refreshPage(){ 
        window.location.reload(); 
    }
    if (!toggleFetch){
        refreshPage()
    }


    return(
        <div>
            <button className="select_button" onClick={deleteFromList}><span>Delete!!!</span><span>Watched too Many Times</span></button>
        </div>
    )
}
export default Delete