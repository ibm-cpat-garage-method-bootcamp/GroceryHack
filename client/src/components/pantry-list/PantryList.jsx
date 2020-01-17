import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput
} from "carbon-components-react";
import Header from "client/src/pattern-components/Header.jsx";
import "client/src/pattern-components/patterns.scss";
import axios from "axios";

class PantryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0,
      userRole: false,
      listItems: [],
      value: 'new item',
      showModal: false
    };
    this.handleItemInput = this.handleItemInput.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.toggleNeeded = this.toggleNeeded.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      userRole: this.props.userRole
    })
    this.getListItems();
  }

  getListItems = () => {
    axios.get("http://localhost:3000/api/state")
    .then(({data}) => {
      this.setState({listItems: data})
    }).catch(error => {
      console.error(error)
    })
  }

  putListItems = (item) => {
    axios.put("http://localhost:3000/api/state", {item})
    .then(({data}) => {
      this.setState({listItems: data})
    }).catch(error => {
      console.error(error)
    })
  }

  deleteListItems = (itemName) => {
    axios.delete("http://localhost:3000/api/state", {params: {itemName}})
    .then(({data}) => {
      this.setState({listItems: data})
    }).catch(error => {
      console.error(error)
    })
  }

  postListItems = (item) => {
    axios.post("http://localhost:3000/api/state", {item})
    .then(({data}) => {
      if (data === true) {
        this.setState({
          listItems: [...this.state.listItems, item]
        });
      } else {
        window.alert("error adding item")
      }
    }).catch(error => {
      console.error(error)
    })
  }

  toggleNeeded = (id, nCell) => {
    if (nCell) {
      let updatedList = this.state.listItems;
      updatedList[id].needed = !updatedList[id].needed;
      updatedList[id].needed ? updatedList[id].quantity = "1" : updatedList[id].quantity =  "0";

      this.putListItems(updatedList[id])
  
      this.setState({
        selectedRow: id
      })
    }
  };

  handleItemInput(event) {
    this.setState({value: event.target.value});
  }

  handleItemSubmit = (event) => {
    event.preventDefault();
    const itemToAdd = {
        "name": this.state.value,
        "aisle": Math.floor(Math.random() * (12 - 1)) + 1,
        "quantity": "1",
        "needed": true,
        "image": "",
        "approved": true,
        "availableInStore": true
    }

    this.postListItems(itemToAdd)
  }

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.toggleNeeded(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
          />
        </div>

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

    const currentList = this.state.listItems;
    currentList[id].quantity = quantity;
    currentList[id].quantity === "0" ? currentList[id].needed = false : currentList[id].needed = true;
    
    this.putListItems(currentList[id])
    // this.setState({listItems: currentList});
  }

  deleteItem = (id) => {
    const itemName = this.state.listItems[id].name
    if (window.confirm(`Are you sure you want to delete ${itemName} from your pantry?`)) {
      this.deleteListItems(itemName)
    }

    // this.setState({listItems: currentList})
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
                    Items
                  </StructuredListCell>
                  <StructuredListCell head>
                    Quantity Needed
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
              <StructuredListCell>
                {this.state.listItems.map((row, i) => {
                  return (
                    <div nCell={`needed-${i}`} onClick={() => this.toggleNeeded(i, `needed-${i}`)}>
                      {this.renderRow(this.state.listItems[i].needed ? '\u{2705}' : '\u{274C}')}
                    </div>
                   )
                  })}
              </StructuredListCell>
              <StructuredListCell>
                {this.state.listItems.map((row, i) => {
                  return (
                    <div className={`name-${i}`} onClick={() => this.deleteItem(i, `quantity-${i}`)}>
                    {this.renderRow(row.name, i)}
                  </div> 
                  )
                })}
              </StructuredListCell>
              <StructuredListCell>
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
