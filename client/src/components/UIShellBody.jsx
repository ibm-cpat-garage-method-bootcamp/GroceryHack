import React, { Component } from "react";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import "../pattern-components/patterns.scss";
import PantryList from "./pantry-list/PantryList";

class UIShellBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [
        {
          name: "Eggs",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true,
          purchased: false
        },
        {
          name: "Milk",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true,
          purchased: false
        },
        {
          name: "Zebra Cakes",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true,
          purchased: false
        },
        {
          name: "Honey",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true,
          purchased: false
        },
      ],
      // sortedBy: "name"
    }
  }

  updateState = (newState) => {
    this.setState(newState)
  }

  render() {
    const { selectedList } = this.props;
    return (
      <div className="pattern-container">
        {
          selectedList === "Pantry List" ? 
          <PantryList/> :
          <ShoppingList updateState={this.updateState} shoppingList={this.state.shoppingList} />
        }
      </div>
    );
  }
}
export default UIShellBody;
