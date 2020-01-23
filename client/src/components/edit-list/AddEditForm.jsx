import React, { Component } from "react";
import {
  TextInput,
  Form,
  DropdownV2,
  Button,
  Tile
} from "carbon-components-react";
import Header from "../..pattern-components/Header.jsx";
import "../../pattern-components/patterns.scss";

let checkFlag = true;

class AddEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToSave: {},
      name: "Grocery Item",
    };
  }

  // componentDidMount() {
  //   let dataToSave = {
  //     name: this.state.name,
  //   };
  //   this.setState({ dataToSave });
  // }

  // saveData = event => {
  //   const target = event.target;
  //   let fieldName = target.name;
  //   let fieldValue = target.value;
  //   if (!fieldValue) {
  //     this.setState({ [fieldName]: fieldValue, [fieldName + "Invalid"]: true });
  //   } else {
  //     this.setState({
  //       [fieldName]: fieldValue,
  //       [fieldName + "Invalid"]: false
  //     });
  //   }
  // };

  saveDataDropdown1 = ({ selectedItem }) => {
    this.setState({ state: selectedItem, stateInvalid: false });
  };

  saveDataDropdown2 = ({ selectedItem }) => {
    this.setState({ country: selectedItem, countryInvalid: false });
  };

  checkForm = () => {
    checkFlag = true;
    if (!this.state.name) {
      this.setState({ nameInvalid: true });
      checkFlag = false;
    }
  };

  // saveForm = event => {
  //   event.preventDefault();
  //   if (this.checkForm()) {
  //     let dataToSave = {
  //       name: this.state.name,
  //     };
  //     this.setState({ dataToSave });
  //   }
  // };

  render() {
    return (
      <div>
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                <TextInput
                  id="name"
                  name="name"
                  value={this.state.name || ""}
                  onChange={this.props.saveData}
                  labelText="List Item"
                  maxLength="100"
                  invalid={this.state.nameInvalid}
                  invalidText="Please enter a list item."
                />
                <br />
                <br />
                <div className="left-align">
                  <Button onClick={this.props.saveForm}>Update</Button>
                </div>
              </Form>
            </Tile>
          </div>
        </div>
        <br />
        <br />
        {Object.keys(this.state.dataToSave).length > 0 && (
          <div className="bx--row">
            <div className="bx--col-xs-12 left-align">
              <Tile>
                {Object.keys(this.state.dataToSave).map(item => (
                  <p key={item}>
                    &nbsp;&nbsp;
                    <strong>
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace(/([A-Z])/g, " $1")}
                      :
                    </strong>{" "}
                    {this.state.dataToSave[item]}
                  </p>
                ))}
              </Tile>
              <br />
              <br />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default AddEditForm;
