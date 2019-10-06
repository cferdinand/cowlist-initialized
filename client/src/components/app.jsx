import React from "react";
import axios from "axios";
import Cow from "./Cow.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };
    this.Read = this.Read.bind(this);
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Update = this.Update.bind(this);
  }

  componentDidMount() {
    this.Read();
  }

  Read() {
    axios
      .get("/api/cows")
      .then(({ data }) => {
        this.setState(prevState => {
          let newState = Object.assign([], prevState);
          newState.cows = data;
          return newState;
        });
      })
      .catch(err => {
        console.log(error);
      });
  }

  Create(cow) {
    axios
      .post("/api/cows", cow)
      .then(data => {
        this.Read();
      })
      .catch(err => {
        console.error(err);
      });
  }

  CowChecker(cow) {
    let oldCow = this.state.cows;
    let newCow = cow;
    if (newCow.cow_name === "") {
      oldCow.map(cowData => {
        if (cowData.id === newCow.id) {
          newCow.cow_name = cowData.cow_name;
        }
      });
    } else if (newCow.cow_description === "") {
      oldCow.map(cowData => {
        if (cowData.id === newCow.id) {
          newCow.cow_description = cowData.cow_description;
        }
      });
    }
    return newCow;
  }

  Update(cow) {
    let updatedCow = this.CowChecker(cow);
    axios
      .put("/api/cows", updatedCow)
      .then(data => {
        this.Read();
      })
      .catch(err => {
        console.error(err);
      });
  }

  Delete(cowId) {
    axios
      .delete("/api/cows", { data: { id: cowId } })
      .then(data => {
        this.Read();
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>GET YOUR COWS HERE</h1>
        <Cow createCows={this.Create} cows={this.state.cows} delete={this.Delete} update={this.Update} />
      </div>
    );
  }
}

export default App;
