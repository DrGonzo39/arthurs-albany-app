import React, {useState, useEffect} from "react";
import Home from "./Home";
import './App.css';
import LocationList from "./LocationList";
import LocationForm from "./LocationForm";

function App() {
  const [mainImage, setMainImage] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/homepage")
      .then((r) => r.json())
      .then((data) => {
          setMainImage(data.image);
      })
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/locations")
    .then((r) => r.json())
    .then((data) => {
      setLocations(data);
    })
  }, []);
  console.log(locations);

  function handleNewLocation(newLocation) {
    setLocations([...locations, newLocation]);
  }

  return (
    <div>
      <Home mainImage={mainImage}/>
      <LocationList locations={locations}/>
      <LocationForm onAddLocation={handleNewLocation}/>
    </div>
  );
}

export default App;
