import React, {useState, useEffect} from "react";

function Home() {
    const [mainImage, setMainImage] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/homepage")
        .then((r) => r.json())
        .then((data) => {
            setMainImage(data.image);
        })
    }, []);
    
    return (
        <div>
            <h1>The Albany/Lark Street Guide Zone!</h1>
            <p>Whether you're a hippie, a skater, or just lookin' for a good time, we'll help you get there!</p>
            <p>Check out our 'Location List' page, you can even leave a review!</p>
            <img src={mainImage} alt="main albany pic"/>
        </div>
    )
}

export default Home;