import React,{useState} from "react";

function LocationList({ locations }) {
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

    const rednerList = locations.map((location) => {
        return <div key={location.id}>
            <h1>{location.name}</h1>
            <img alt={location.id} src={location.image} />
            <button onClick={handleBasedCountChange}>Based</button>
            <button onClick={handleMidCountChange}>Mid </button>
            <button onClick={handleCringeCountChange}>Cringe </button>
            <p className="location_bio">{location.text}</p>
        </div>
    })

    return (
        <div>
            <h3>Based-votes {basedCount}</h3>
            <h3>Mid-votes {midCount}</h3>
            <h3>Cringe-votes {cringeCount}</h3>
            {rednerList}
        </div>
    )
};

export default LocationList; 