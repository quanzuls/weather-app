import { useState } from "react";

const Search = (props) => {
    const [city, setCity] = useState('');
    const handleSearch = () => {
        props.setKeyword(city);

    }
    return (
        <div>
            <input
                type="text"
                placeholder="Search any city..."
                className="input-search"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                onBlur={() => handleSearch()}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        handleSearch()
                    }
                }}
            />
        </div>
    )
}
export default Search;