import axios from "axios"
import { useState } from "react";

const Post =({movie})=>{

    // const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=${process.env.AIRTABLE_API_KEY}`

    const API_URL=`https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?api_key=key4quh96AxbVXmTp`
    
    const[image, setImage] =useState("");
    const[title, setTitle] = useState("");
    const[year, setYear] = useState("");
    const[description, setDescription] = useState("") ;
    const[toggleFetch, setToggleFetch] =useState(true);


    const selectMovie =async(ev)=> {
        ev.preventDefault();
        console.log("You Selected that movie") 
        console.log(movie) 

        setTitle(movie.title);
        setImage(movie.image);
        setYear(movie.year);
        setDescription(movie.crew);

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
    }

    return(
        <div>
            <button className="select_button" onClick={selectMovie}>
                Select
            </button>
        </div>
    )



}
export default Post