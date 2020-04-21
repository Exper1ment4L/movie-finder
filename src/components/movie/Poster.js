const Poster = (props) => {
    const handleNoPoster = (e) => {
        e.target.src = 'https://unibooks.nz/media/zoo/images/placeholder-135-300x500_e5ffd609dfdf17e01ff18b5428d59fa6.png';
    };

    return <img src={props.src} className="movie-poster" alt="moviePoster" onError={handleNoPoster} />;
};

export default Poster;
