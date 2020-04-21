import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

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
            setIsFav(false);
        }
    };

    return (
        <i className="fav-icon" onClick={handleClick}>
            {isFav ? <FontAwesomeIcon icon={faHeartBroken} color="salmon" size="2x" /> : <FontAwesomeIcon icon={faHeart} color="red" size="2x" />}
        </i>
    );
};

export default FavoriteButton;
