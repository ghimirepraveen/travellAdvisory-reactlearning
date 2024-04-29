import "./App.css";
import { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Headers/Header";
import Map from "./components/Map/Map";
import List from "./components/LIst/List";
import getPlacesData from "./api";

function App() {
  const [place, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    console.log(`coordinates, bounds`);
    getPlacesData().then((data) => {
      setPlaces(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
