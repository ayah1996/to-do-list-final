import React, { Component } from "react";
import Button from "../../Components/Buttons/Button";
import ListItem from "../../Components/ListItem/ListItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import "./Styles.css";

class HomeScreen extends Component {
  state = {
    value: "",
    list: [],
    error: "",
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      this.setState({ list: response.data.splice(0, 10) });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="inner-container">
        <h1 className="page-title">To Do list app</h1>
        <section className="input-section">
          {/* Controlled input  */}
          <div className="input-box">
            <input
              className="add-task-input"
              type="text"
              placeholder="Enter a new task .."
              onChange={(event) => {
                this.setState({
                  value: event.target.value,
                });
              }}
              value={this.state.value}
            />
            {this.state.error ? <span>{this.state.error}</span> : null}
          </div>

          <Button
            text="Add"
            handleClick={() => {
              if (this.state.value) {
                const newArr = [
                  {
                    title: this.state.value,
                    id: uuidv4(),
                  },
                  ...this.state.list,
                ];
                this.setState({ list: newArr, value: "", error: "" });
              } else {
                this.setState({ error: "please submit a task" });
              }
            }}
          ></Button>
        </section>
        <section className="items-section">
          {this.state.list.length ? (
            this.state.list.map((item) => (
              <ListItem
                task={item.title}
                key={item.id}
                handleDelete={() => {
                  const filterItems = this.state.list.filter(
                    // eslint-disable-next-line eqeqeq
                    (filterItem) => filterItem.id != item.id
                  );
                  this.setState({ list: filterItems });
                }}
              ></ListItem>
            ))
          ) : (
            <span>Loading ... </span>
          )}
        </section>
      </div>
    );
  }
}

export default HomeScreen;
