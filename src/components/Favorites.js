import { useEffect, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import Card from './movie/Card';

const Favorites = ({ store }) => {
    let favArr = [];

    useEffect(() => {
        favArr = JSON.parse(localStorage.getItem('favorites'));
        store.setFavorites(favArr);
    }, []);

    return (
        <Fragment>
            {store.favorites.length > 0 ? (
                store.favorites.map((item) => {
                    return <Card key={item.id} id={item.id} poster={item.poster} title={item.title} year={item.year} rating={item.rating} />;
                })
            ) : (
                <div className="display-3">You have no favorites.</div>
            )}
        </Fragment>
    );
};

export default inject('store')(observer(Favorites));
