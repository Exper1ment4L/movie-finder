import React, { Fragment } from 'react';
import Card from './movie/Card';

const Favorites = (props) => {
    return (
        <Fragment>
            {props.favArr && props.favArr.length > 0 ? (
                props.favArr.map((item) => {
                    return <Card key={item.id} id={item.id} poster={item.poster} title={item.title} year={item.year} rating={item.rating} />;
                })
            ) : (
                <div className="display-4 p-1 info">You have no favorites.</div>
            )}
        </Fragment>
    );
};

export default Favorites;
