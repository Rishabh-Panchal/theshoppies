import React from 'react';

const MovieResult = (props) => {

    return (
        <div className="MovieResult-container">
            <h2>Results for "{props.searchQuery}"</h2>

            {props.movieList.map((movie, index) => (
                <div className="Movie-details">
                    <li>
                        {movie.Title} ({movie.Year}) 
                        <button className="Nominate-btn" onClick={() => props.setNomination(movie)} disabled={props.isDisabled}> Nominate </button>
                    </li>
                </div>
            ))}


        </div>
    )
};

export default MovieResult;