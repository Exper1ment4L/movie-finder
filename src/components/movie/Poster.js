import { Default } from 'react-awesome-spinners';

const Poster = (props) => {
    const handleNoPoster = (e) => {
        e.target.onerror = null;
    };

    return props.src !== 'N/A' ? (
        <img src={props.src} className="movie-poster" alt={props.src} onError={handleNoPoster} />
    ) : (
        <div className="movie-poster p-5">
            <Default />
        </div>
    );
};

export default Poster;
