/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import "./Row.css";
import instance from '../axios';

function Row({title, fetchUrl, isLargeRow=false, handleModal}) {
    
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchUrl]);

    

    return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
            {movies.map( movie => (
                
                    <img src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}
                    className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                    key={movie.id}
                    onClick={() => {handleModal(movie)}}
                    />
                )
            )}
        </div>
    </div>
  )
}

export default Row