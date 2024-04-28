import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Headers/Header";
import Map from "./components/Map/Map";
import List from "./components/LIst/List";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
