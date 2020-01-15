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
      listItems: ["bananas", "other bananas", "moar bananas"],
      value: 'new item'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    let currentState = this.state.listItems;
    currentState.push(this.state.value);
    this.setState({
      listItems: currentState
    })
  }

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
      </StructuredListRow>
    );
  };

  render() {
    const data = ["row1", "row2", "row3"];
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Pantry List"
        />
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  <StructuredListCell head>
                    Pantry List
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {this.state.listItems.map((row, i) => {
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

export default PantryList;
