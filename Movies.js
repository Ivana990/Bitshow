import React, {useState, useEffect} from "react";
import HomePage from "./Pages/HomePage";
import SinglePage from "./Pages/SinglePage";
import "./movies.css";

const Movies = () => {
    const [data, setData] = useState([])
    const [selectedMovie, setSelectedMovie] = useState('')



    const fetchData = () => {
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(response => setData(response.sort((a,b) => b.rating.average - a.rating.average).filter((e,i)=>i<50)))
    }


    useEffect(() => {
        fetchData()
    }, [])


    const changeSelectMovie = (obj)=>{
        setSelectedMovie(obj)
    }

   const backToHome = () => {
       setSelectedMovie(true)
    }

    
    return <div>
      {!selectedMovie ?
      <HomePage xyz={data} funkcija={changeSelectMovie}/> 
      : 
      <SinglePage qwe={selectedMovie} backToHome={backToHome}/>
      }
    </div>
    
    }
 
export default Movies;