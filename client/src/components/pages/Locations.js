import React, { useState } from "react";
import Mapquest from "../Map"
import Row from "../Row";
import Col from "../Col";

function Locations() {

  const [lat, setLat] = useState("39.9526")
  const [lng, setLng] = useState("-75.1652")

  return (
    
    <div className="container rounded w-75 m-5 p-5 mx-auto d-block">
     <h1 className="mt-3" style={{textDecorationLine: "underline"}}>Locations:</h1>
      <Row>
        <Col size="md-6 sm-12">
      <h1 className="mt-3">South Philly</h1>
  1339 S 6th Street Philadelphia, PA <br />
  1901 S 9th Street Philadelphia, PA

      <h1 className="mt-3">Germantown</h1>
  30 West Armat Street Philadelphia, PA

      <h1 className="mt-3">West Philadelphia</h1>
  511 S 53nd Street Philadelphia PA <br />
  313 N 39th Street Philadelphia PA

      <h1 className="mt-3">Northern Liberties</h1>
  635 W Girard Ave Philadelphia PA <br />
  915 Spring Garden Street Philadelphia PA
  </Col>
  <Col size="md-6 sm-12">
      <h1 className="mt-3">Kensington</h1>
  3400 Coral Street Philadelphia PA
 
      <h1 className="mt-3">Brewerytown</h1>
3831 W Girard Ave Philadelphia PA

      <h1 className="mt-3">Fishtown</h1>
  1355 E Palmer Street Philadelphia Palmer

      <h1 className="mt-3">Center City</h1>
  1180 Ludlow Street Philadelphia PA

  </Col>
  </Row>
  <br></br>
  <Row>
  <Col size="md-12 sm-12">
      <Mapquest
        height="70vh"
        width="100%"
        float="right"
        center={[lat, lng]}
        tileLayer={'map'}
        zoom={12}
        apiKey="KgkkF0XGvA7cEfndYAaPIGPwusNVFISG"

      />
    </Col>
      </Row>
    </div>

  );
}

export default Locations;