const TypeSelect = (props) => {
    return (
        <select className="type-select" onChange={props.onChange}>
            <option value="movie">Select Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
        </select>
    );
};

export default TypeSelect;
