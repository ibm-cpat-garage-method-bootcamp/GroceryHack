import React, { Component } from "react";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import "../pattern-components/patterns.scss";
import PantryList from "./pantry-list/PantryList";
import RoleSelectionView from "./pantry-list/RoleSelectionView";

class UIShellBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: {
        "Pantry List": PantryList,
        "Shopping List": ShoppingList
      },
      userRole: false,
    }
    this.handleRoleSelection = this.handleRoleSelection.bind(this);
  }

  handleRoleSelection = (role) => {
    this.setState({
      userRole: role
    })
  }

  setShellBodyState = (newState) => {
    this.setState(newState)
  }

  render() {
    const { selectedList } = this.props;
    if (!this.state.userRole) {
      return (
        <RoleSelectionView handleRoleSelection={this.handleRoleSelection} />
      )
    } else {
      return (
        <div className="pattern-container">
          {
            selectedList === "Pantry List" ? 
            <PantryList updateShoppingList={this.updateShoppingList} userRole={this.state.userRole}/> :
            <ShoppingList setShellBodyState={this.setShellBodyState} shoppingList={this.state.shoppingList}  />
          }
        </div>
      );
    }

  }
}
export default UIShellBody;
