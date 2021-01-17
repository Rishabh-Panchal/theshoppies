import React from 'react';

const NominatedMovies = (props) => {
    return (
        <div className="NominatedMovies-container">
            <h2>Nominations</h2>
            <div className="Nominated-movies">
                {props.nominatedMovieList.map((movie, index) => (

                    <li>
                        {movie.Title} ({movie.Year}) 
                        <button className="RemoveNomination-btn" onClick={() => props.removeNomination(movie)}> Remove </button>
                    </li>
                ))}
            </div>

            <div className="NominationInfo-Banner">
                <span>You have Nominated {props.count}/5 Movies</span>
            </div>
        </div>
    )
};

export default NominatedMovies;