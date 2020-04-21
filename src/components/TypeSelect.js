const TypeSelect = (props) => {
    return (
        <select className="type-select" onChange={props.onChange} defaultValue="Select type">
            <option value="Select type" disabled hidden>
                Select type
            </option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
        </select>
    );
};

export default TypeSelect;
