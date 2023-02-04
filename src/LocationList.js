import React,{useState} from "react";

function LocationList({ locations }) {
    const [locationRating, setLocationRating] = useState("")

    function handleRatingChange(e) {
        setLocationRating(e.target.value);
    }

    const rednerList = locations.map((location) => {
        return <div key={location.id}>
            <h1>{location.name}</h1>
            <img alt={location.id} src={location.image} />
            <select onChange={handleRatingChange} value={locationRating}>
                <option>Based</option>
                <option>Mid</option>
                <option>Cringe</option>
            </select>
        </div>
    })

    return (
        <div>
        {rednerList}
        </div>
    )
};

export default LocationList; 