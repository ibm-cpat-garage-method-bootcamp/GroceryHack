import React, { Component } from "react";
import {
  Checkbox,
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
} from "carbon-components-react";
import Header from "../../pattern-components/Header";
import "../../pattern-components/patterns.scss"
import { sortArrayofObjectsAsc } from "../../util/helpers";
import axios from "axios";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      value: 'new item',
      sortedBy: 'name'
    }
  }

  getShoppingList = () => {
    axios.get("http://localhost:3000/api/state")
    .then(({data}) => {
      const shoppingList = data.filter((item) => item.needed === true)
      this.setState({shoppingList: shoppingList})
    }).catch(error => {
      console.error(error)
    })
  }

  postShoppingList = (item) => {
    axios.post("http://localhost:3000/api/state", {item})
    .then(({data}) => {
      if (data === true) {
        this.setState({
          shoppingList: [...this.state.shoppingList, item]
        });
      } else {
        window.alert("error adding item")
      }
    }).catch(error => {
      console.error(error)
    })
  }

  componentDidMount = () => {
    this.getShoppingList();
    this.sortItems("name");
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.shoppingList.length !== this.state.shoppingList.length) {
      this.sortItems(this.state.sortedBy);
    }
  }

  onPurchaseClick = id => {
    const itemsCopy = [...this.state.shoppingList];
    itemsCopy[id].purchased = !itemsCopy[id].purchased;
    this.setState({ shoppingList: itemsCopy });
  };

  sortItems = key => {
    this.setState({
      shoppingList: sortArrayofObjectsAsc(this.state.shoppingList, key),
      sortedBy: key
    });
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
        name: this.state.value,
        aisle: Math.floor(Math.random() * (12 - 1)) + 1,
        quantity: "1",
        needed: true,
        image: "",
        approved: true,
        availableInStore: true,
        purchased: false
      }
    this.postShoppingList(newItem);
    this.setState({value: 'new item'})
  }

  renderRow = (row, col, id) => {
    return (
      <StructuredListRow key={id} onClick={()=> {this.onPurchaseClick(id)}}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
          />
          <StructuredListCell>
            <Checkbox checked={this.state.shoppingList[id].purchased} />
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
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
            <input type="text" placeholder={this.state.value} onChange={this.handleChange} value={this.state.value === "new item" ? "" : this.state.value} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head>
                    Purchased
                  </StructuredListCell>
                  <StructuredListCell head onClick={() => {this.sortItems("name")}} style={{cursor: "pointer"}}>
                    Items
                  </StructuredListCell>
                  <StructuredListCell head onClick={() => {this.sortItems("aisle")}} style={{cursor: "pointer"}}>
                    Aisle
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
        
              <StructuredListBody>
                {this.state.shoppingList.map((item, i) => {
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