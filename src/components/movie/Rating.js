import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = (props) => {
    return (
        <div className="movie-rating">
            <FontAwesomeIcon icon={faStar} color="#E4BB24" /> {props.rating} / 10
        </div>
    );
};

export default Rating;
