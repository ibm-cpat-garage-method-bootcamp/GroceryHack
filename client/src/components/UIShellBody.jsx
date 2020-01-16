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
      userRole: false
    }
    this.handleRoleSelection = this.handleRoleSelection.bind(this);
  }

  handleRoleSelection = (role) => {
    console.log(role);
    this.setState({
      userRole: role
    })
  }

  render() {
    const { selectedList } = this.props;
    const ActiveList = this.state.components[selectedList];
    if (!this.state.userRole) {
      return (
        <RoleSelectionView handleRoleSelection={this.handleRoleSelection} />
      )
    } else {
      return (
        <div className="pattern-container">
          <ActiveList showDescription={true} userRole={this.state.userRole}/>
        </div>
      );
    }
  }
}
export default UIShellBody;
