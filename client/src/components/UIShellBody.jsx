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
    }
  }

  setShellBodyState = (newState) => {
    this.setState(newState)
  }

  updateShoppingList = (item) => {
    // TODO: add item.approved
    if (item.needed === true) {
      this.addItemToShoppingList(item)
    } 
    // else if (item.needed !== true || item.approved !== true) {
    //   // TODO: pending list??
    //   console.log("doesnt meet both criteria")
    // } 
    else {
      this.removeItemFromShoppingList(item)
    }
  }

  addItemToShoppingList = (newItem) => {
    this.setState({shoppingList: [...this.state.shoppingList, newItem]})
  }

  removeItemFromShoppingList = (newItem) => {
    const shoppingListCopy = this.state.shoppingList.filter((item) => item.name !== newItem.name)
    this.setState({shoppingList: shoppingListCopy})
  }

  render() {
    const { selectedList } = this.props;
    return (
      <div className="pattern-container">
        {
          selectedList === "Pantry List" ? 
          <PantryList updateShoppingList={this.updateShoppingList}/> :
          <ShoppingList setShellBodyState={this.setShellBodyState} shoppingList={this.state.shoppingList} />
        }
      </div>
    );
  }
}
export default UIShellBody;
