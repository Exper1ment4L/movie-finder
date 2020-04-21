import React, { Fragment, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Navbar from '../components/Navbar';
import Favorites from '../components/Favorites';

const favorites = ({ store }) => {
    useEffect(() => {
        store.setFavorites(JSON.parse(localStorage.getItem('favorites')));
    }, []);

    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="row d-flex justify-content-center flex-row mt-3 ">
                    <Favorites favArr={store.favorites} />
                </div>
            </div>
        </Fragment>
    );
};

export default inject('store')(observer(favorites));
