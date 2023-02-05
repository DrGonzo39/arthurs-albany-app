import React from "react";
import About from "./About";

function Home({ mainImage }) {
    
    return (
        <div>
            <h1>The Albany/Lark Street Guide Zone!</h1>
            <p>Whether you're a hippie, a skater, or just lookin' for a good time, we'll help you get there!</p>
            <p>Check out our 'Location List' page, you can even leave a review!</p>
            <img className="main" src={mainImage} alt="main albany pic"/>
            <About/>
        </div>
    )
}

export default Home;