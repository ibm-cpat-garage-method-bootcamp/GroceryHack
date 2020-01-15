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
import { sortArrayofObjectsAsc } from "../../util/helpers";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0,
      items: [
        {
          name: "Eggs",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true
        },
        {
          name: "Milk",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true
        },
        {
          name: "Zebra Cakes",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true
        },
        {
          name: "Honey",
          aisle: Math.floor(Math.random() * (12 - 1)) + 1,
          quantity: "1",
          needed: true,
          image: undefined,
          approved: true,
          availableInStore: true
        },
      ]
    };
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  sortItems = (key) => {
    this.setState({items: sortArrayofObjectsAsc(this.state.items, key)})
  }

  // onAisleSortClick = () => {
  //   this.setState({items: sortArrayofObjectsAsc(this.state.items, "aisle")});
  // }

  // onNameSortClick = () => {
  //   this.setState({items: sortArrayofObjectsAsc(this.state.items, "name")});
  // }

  componentDidMount = () => {
    this.sortItems("name");
  }

  renderRow = (row, col, id) => {
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
          {col}
        </StructuredListCell>
      </StructuredListRow>
    );
  };

  render() {
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
                  <StructuredListCell head onClick={() => {this.sortItems("name")}} style={{cursor: "pointer"}}>
                    Items
                  </StructuredListCell>
                  <StructuredListCell head onClick={() => {this.sortItems("aisle")}} style={{cursor: "pointer"}}>
                    Aisle
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
        
              <StructuredListBody>
                {this.state.items.map((item, i) => {
                  const {name, aisle} = item;
                  return this.renderRow(name, aisle, i);
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