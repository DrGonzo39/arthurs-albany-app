import React from "react";
import LocationItem from "./LocationItem";

function LocationList({ locations }) {
   
    const rednerList = locations.map((location) => {
        return <div key={location.id}>
            <LocationItem location={location} />
        </div>
    })

    return (
        <div>
        {rednerList}
        </div>
    )
};

export default LocationList; 