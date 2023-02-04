import React from "react";

function Home({ mainImage }) {
    
    return (
        <div>
            <h1>The Albany/Lark Street Guide Zone!</h1>
            <p>Whether you're a hippie, a skater, or just lookin' for a good time, we'll help you get there!</p>
            <p>Check out our 'Location List' page, you can even leave a review!</p>
            <img className="main" src={mainImage} alt="main albany pic"/>
        </div>
    )
}

export default Home;