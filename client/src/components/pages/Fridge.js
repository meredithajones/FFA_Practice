import React, { Component } from "react";
import inventory from "./inventory.json";
import LittleFridge from "../LittleFridge";
// import Inventory from "../Inventory";


class Fridge extends Component {
  state = {
    inventory
  };

  render() {
    return (
      <div className="container rounded w-75 m-5 p-5 mx-auto d-block">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Qty</th>
      <th scope="col">Item</th>
      <th scope="col">Take or Donate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">4</th>
      <td>Bananas</td>
      <td>
      <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-danger" type="button">–</button>
  <button class="btn btn-success" type="button">+</button>
</div>
</td>
    </tr>
  </tbody>
</table>

      </div>
    );
  }
}


  export default Fridge;