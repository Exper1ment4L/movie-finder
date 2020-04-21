import React from 'react';
import Poster from './Poster';
import Title from './Title';
import Rating from './Rating';
import FavoriteButton from './FavoriteButton';

const Card = (props) => {
    const favObj = {
        id: props.id,
        poster: props.poster,
        title: props.title,
        year: props.year,
        rating: props.rating,
    };

    return (
        <div className="movie-card">
            <Poster src={props.poster} />
            <Title title={props.title} year={props.year} />
            <Rating rating={props.rating} />
            <FavoriteButton obj={favObj} />
        </div>
    );
};

export default Card;
