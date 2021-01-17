import React from 'react';

const Banner = (props) => {
    return (

        <div className="Banner-container">
            <span> {props.bannerContent} </span>
        </div>

    )
};

export default Banner;