import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';

const FavoriteButton = (props) => {
    const [isFav, setIsFav] = useState();

    let favArr = [];
    useEffect(() => {
        if (localStorage.getItem('favorites') !== null) {
            favArr = localStorage.getItem('favorites');
            if (favArr.includes(props.obj.id)) {
                setIsFav(true);
            }
        }
    }, [favArr]);

    const handleClick = () => {
        if (localStorage.getItem('favorites') == null) {
            favArr = [props.obj];
            localStorage.setItem('favorites', JSON.stringify(favArr));
            setIsFav(true);
        } else if (!localStorage.getItem('favorites').includes(props.obj.id)) {
            let favs = JSON.parse(localStorage.getItem('favorites'));
            favArr = favs;
            favArr.push(props.obj);
            localStorage.setItem('favorites', JSON.stringify(favArr));
            setIsFav(true);
        } else {
            let favs = JSON.parse(localStorage.getItem('favorites'));
            favArr = favs;
            favArr.map((item, index) => {
                if (item.id === props.obj.id) {
                    favArr.splice(index, 1);
                }
            });
            localStorage.setItem('favorites', JSON.stringify(favArr));
            props.store.setFavorites(favArr);
            setIsFav(false);
        }
    };

    return (
        <i className="fav-icon" onClick={handleClick}>
            {!isFav ? <FontAwesomeIcon icon={faHeart} size="2x" /> : <FontAwesomeIcon icon={faHeart} color="red" size="2x" />}
        </i>
    );
};

export default inject('store')(observer(FavoriteButton));
