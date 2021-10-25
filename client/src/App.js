import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL= "https://imdb-api.com/en/API/SearchMovie"
// const API_URL= "https://imdb-api.com/en/API/Search"
const API_KEY= "k_uqk2e0we"

function App() {

  const[toggleFetch, setToggleFetch] =useState(true);

  useEffect (() => {
    console.log("Getting Started");  
    const getMovies = async () => {
    const resp = await axios.get(`${API_URL}/${API_KEY}/inception`)
    console.log(resp.data.results);
    // setBlogPosts(resp.data.records)
  }
  getMovies();
}, [toggleFetch]);


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
