import { Default } from 'react-awesome-spinners';

const Poster = (props) => {
    const handleNoPoster = (e) => {
        e.target.onerror = null;
        e.target.src = '/def.jpg';
    };

    return props.src !== 'N/A' ? <img src={props.src} className="movie-poster" onError={handleNoPoster} /> : <img className="movie-poster" src="/def.jpg" alt="" />;
};

export default Poster;
