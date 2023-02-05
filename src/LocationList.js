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
            <button onClick={handleBasedCountChange}>Based {basedCount}</button>
            <button onClick={handleMidCountChange}>Mid {midCount}</button>
            <button onClick={handleCringeCountChange}>Cringe {cringeCount}</button>
        </div>
    })

    return (
        <div>
        {rednerList}
        </div>
    )
};

export default LocationList; 