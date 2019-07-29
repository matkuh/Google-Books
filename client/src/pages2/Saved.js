import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Container from "../components/Container"


class Saved extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Container>
          <Card />
        </Container>

      </div>
    );
  }
}

export default Saved;
