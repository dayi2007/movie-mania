import { useParams } from "react-router"

const Post =()=>{
    // API_URL="https://api.airtable.com/v0/appY6Xnbt8rAL2ZGb/Table%201?${API_KEY}"
    // API_KEY="key4quh96AxbVXmTppost"

    // const API_URL_Movies_ID= `https://imdb-api.com/en/API/Title/${API_KEY_IMDB}/${ID}}`
    // // const API_KEY_IMDB= "k_uqk2e0we"
    
    // const params = useParams

    // useEffect (() => {
    //     console.log("Getting Started");  
    //     const getMovie = async () => {
    //     const resp = await axios.post(`${API_URL}/${API_KEY}`)
    //     console.log(resp.data.results);
    //     setMovieSearch(resp.data.results);
    //   }
    //   getMovie();
    // }, [toggleFetch]);



    // return(
    //     <div>

    //     </div>
    // )

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
            <Link to={`/select/${movie_id}`}>
            <button className="select" onClick={(ev) => selectMovie}>
                Select
                </button>
            </Link>
        </div>
    )



}
export default Post