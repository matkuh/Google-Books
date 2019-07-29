import React from 'react';
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import Container from "./components/Container"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./pages/Search"
import Saved from "./pages/Saved"



function App() {
  return (
    <Router>
      <div>
          <Route exact path="/Search" component={Search}/>
          <Route exact path="/Saved" component={Saved}/>
      </div>
    </Router>
      );
    }
    
    export default App;