import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "../../pattern-components/Header";
import "../../pattern-components/patterns.scss"

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0
    };
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>

        <StructuredListCell className="simple-list-row">
          {row}
        </StructuredListCell>
        <StructuredListCell className="simple-list-row">
          {Math.floor(Math.random() * (12 - 1)) + 1}
        </StructuredListCell>
      </StructuredListRow>
    );
  };

  render() {
    const data = ["Eggs", "Milk", "Honey"];
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Shopping List"
          subtitle="Items to Get on Your Next Shopping Trip"
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  <StructuredListCell head>
                    Items
                  </StructuredListCell>
                  <StructuredListCell head>
                    Aisle
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
        
              <StructuredListBody>
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;