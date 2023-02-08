import React, { useState } from "react";

function LocationItem({ location }) {
    const [basedCount, setBasedCount] = useState(0);
    const [midCount, setMidCount] = useState(0);
    const [cringeCount, setCringeCount] = useState(0);

    function handleBasedCountChange() {
        setBasedCount(basedCount + 1);
    }

    function handleMidCountChange() {
        setMidCount(midCount + 1);
    }

    function handleCringeCountChange() {
        setCringeCount(cringeCount + 1);
    }    
    return (
        <div>
            <h1>{location.name}</h1>
            <img alt={location.id} src={location.image} />
            <button onClick={handleBasedCountChange}>Based {basedCount}</button>
            <button onClick={handleMidCountChange}>Mid {midCount}</button>
            <button onClick={handleCringeCountChange}>Cringe {cringeCount}</button>
            <p className="location_bio">{location.text}</p>
        </div>
    )
}

export default LocationItem;