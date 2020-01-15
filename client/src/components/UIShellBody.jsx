import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        "Simple List": SimpleList,
        "Shopping List": ShoppingList
      }
    }
  }

  render() {
    const { selectedList } = this.props;
    const ActiveList = this.state.components[selectedList];
    return (
      <div className="pattern-container">
        <ActiveList showDescription={true} />
      </div>
    );
  }
}
export default UIShellBody;
