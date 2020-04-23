const Title = (props) => {
    return (
        <div className="movie-title">
            {props.title} <br /> ({props.year})
        </div>
    );
};

export default Title;
