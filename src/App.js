import React, {useState, useEffect} from "react";
import { Route, Switch} from "react-router-dom"
import Home from "./Home";
import './App.css';
import LocationList from "./LocationList";
import LocationForm from "./LocationForm";
import NavBar from "./NavBar";

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
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home mainImage={mainImage}/>
        </Route>
        <Route exact path="/locationlist">
        <LocationList locations={locations}/>
        </Route> 
        <Route exact path="/locationform">
        <LocationForm onAddLocation={handleNewLocation}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
