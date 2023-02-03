import React, {useState, useEffect} from "react";
import Home from "./Home";
import './App.css';

function App() {
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
      <Home mainImage={mainImage}/>
    </div>
  );
}

export default App;
