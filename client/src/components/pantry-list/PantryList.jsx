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
import Header from "client/src/pattern-components/Header.jsx";
import "client/src/pattern-components/patterns.scss";

class PantryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0,
      listItems: [
        {
          "name": "bananas",
          "aisle": 1,
          "quantity": "1",
          "needed": true,
          "image": "",
          "approved": true,
          "availableInStore": true
        },
        {
          "name": "oranges",
          "aisle": 1,
          "quantity": "1",
          "needed": true,
          "image": "",
          "approved": true,
          "availableInStore": true
        },
        {
          "name": "kiwis",
          "aisle": 1,
          "quantity": "1",
          "needed": true,
          "image": "",
          "approved": true,
          "availableInStore": true
        }
      ],
      value: 'new item',
      showModal: false
    };
    this.handleItemInput = this.handleItemInput.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.toggleNeeded = this.toggleNeeded.bind(this);
  }

  toggleNeeded = (id, nCell) => {
    if (nCell) {
      let updatedList = this.state.listItems;
      updatedList[id].needed = !updatedList[id].needed;
      updatedList[id].needed ? updatedList[id].quantity = "1" : updatedList[id].quantity =  "0"
  
      this.setState({
        selectedRow: id,
        listItems : updatedList
      })
    }
  };

  handleItemInput(event) {
    this.setState({value: event.target.value});
  }

  handleItemSubmit = (event) => {
    event.preventDefault();
    let currentState = this.state.listItems;
    currentState.push(
      {
        "name": this.state.value,
        "aisle": 1,
        "quantity": "1",
        "needed": true,
        "image": "",
        "approved": true,
        "availableInStore": true
      }
    );
    this.setState({
      listItems: currentState
    })
  }

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.toggleNeeded(id)}>
        {/* <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div> */}

        <StructuredListCell className="simple-list-row">
          {row}
        </StructuredListCell>
      </StructuredListRow>
    );
  };

  updateQuantity = (id) => {
    let quantity = prompt("Please enter the quantity:", "1");
    if (quantity === null || quantity === "") {
      quantity = this.state.listItems[id].quantity; 
    } 

    let currentList = this.state.listItems;
    currentList[id].quantity = quantity;
    currentList[id].quantity === "0" ? currentList[id].needed = false : currentList[id].needed = true;

    this.setState({listItems: currentList});
  }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Pantry List"
        />
        <form onSubmit={this.handleItemSubmit}>
          <label>
          Name:
            <input type="text" placeholder={this.state.value} onChange={this.handleItemInput} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head>
                    Needed
                  </StructuredListCell>
                  <StructuredListCell head>
                    Pantry List
                  </StructuredListCell>
                  <StructuredListCell head>
                    Quantity Needed
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>


              <StructuredListBody>
              <StructuredListCell body>
                {this.state.listItems.map((row, i) => {
                  return (
                    <div nCell={`needed-${i}`} onClick={() => this.toggleNeeded(i, `needed-${i}`)}>
                    {this.renderRow(row.needed ? "Yes" : "No", i)}
                    </div> 
                   )
                  })}
              </StructuredListCell>
              <StructuredListCell body>
                {this.state.listItems.map((row, i) => {
                  return (
                    <div className={`name-${i}`}>
                    {this.renderRow(row.name, i)}
                  </div> 
                  )
                })}
              </StructuredListCell>
              <StructuredListCell body>
                {this.state.listItems.map((row, i) => {
                  return (
                    <div qCell={`quantity-${i}`} onClick={() => this.updateQuantity(i, `quantity-${i}`)}>
                    {this.renderRow(row.quantity, i)}
                    </div>
                  )
                })}
              </StructuredListCell>
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default PantryList;
