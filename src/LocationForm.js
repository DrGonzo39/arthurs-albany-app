import React, { useState } from "react";

function LocationForm({ onAddLocation }) {
    const [name,setName] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                image: image,
                rating: "",
            }),
        })
        .then((r) => r.json())
        .then((newLocation) => onAddLocation(newLocation))
    }

    function handleNameText(e) {
        setName(e.target.value);
    }

    function handleImageAdd(e) {
        setImage(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleNameText} value={name} placeholder="Add a Location"/>
            <input type="text" onChange={handleImageAdd} value={image} placeholder="Add an Image URL"/>
            <button type="submit">Submit</button>
        </form>
    );

}

export default LocationForm;

