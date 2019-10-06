import CowInfo from "./CowInfo.jsx";
import CowListEntry from "./CowListEntry.jsx";
import UpdateCow from "./UpdateCow.jsx";
import React, { Component } from "react";

class Cow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cow_name: "",
      cow_description: "",
      modalCow: [],
      showModal: false,
      updateCowModal: false,
      updateCowID: "",
      update_cow_name: "",
      update_cow_description: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateCow = this.handleUpdateCow.bind(this);
    this.handleCow = this.handleCow.bind(this);
    this.submitCow = this.submitCow.bind(this);
  }

  handleClick() {
    this.props.createCows(this.state);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  handleCow(cow) {
    let newCow = [cow];
    this.setState({ modalCow: newCow });
    this.setState({ showModal: !this.state.showModal });
  }
  handleUpdateCow(id) {
    let newID = id;
    this.setState({ updateCowID: newID });
    this.setState({ updateCowModal: !this.state.updateCowModal });
  }
  submitCow() {
    let newCow = {
      id: Number(this.state.updateCowID),
      cow_name: this.state.update_cow_name,
      cow_description: this.state.update_cow_description
    };
    return this.props.update(newCow);
  }

  render() {
    return (
      <div>
        {this.state.showModal ? <CowInfo cow={this.state.modalCow} /> : <div>"Click a cow to see Description"</div>}
        <form>
          <label>
            Cow Name:
            <input type="text" name="cow_name" value={this.state.cow_name} onChange={this.handleChange} />
          </label>
          <label>
            Cow Description:
            <input type="text" name="cow_description" value={this.state.description} onChange={this.handleChange}></input>
          </label>
          <button
            onClick={event => {
              event.preventDefault();
              this.handleClick();
            }}
          >
            Submit
          </button>
          <ul>
            {this.props.cows.map(cowEntry => {
              return <CowListEntry cow={cowEntry} handleCow={this.handleCow} deleteCow={this.props.delete} handleUpdateCow={this.handleUpdateCow} />;
            })}
          </ul>
        </form>
        {this.state.updateCowModal ? <UpdateCow updateCow={this.submitCow} cowInfo={this.state} handleChange={this.handleChange} /> : null}
      </div>
    );
  }
}

export default Cow;
