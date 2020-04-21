import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Favorites from '../components/Favorites';

const favorites = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="row d-flex justify-content-center flex-row mt-3 ">
                    <Favorites />
                </div>
            </div>
        </Fragment>
    );
};

export default favorites;
