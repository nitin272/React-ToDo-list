
import React, { Component } from "react";
import DisplayItems from "../Components/DisplayItems";
import "./App.css";

class MyCustomApp extends Component {
  state = {
    listOfItems: [],
    item: {
      key: "",
      itemDescription: "",
    },
  };

  handleInput = (event) => {
    this.setState({
      item: {
        key: Date.now(),
        itemDescription: event.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { item, listOfItems } = this.state;

    if (item.itemDescription !== "") {
      const updatedList = [...listOfItems, { ...item }];
      this.setState({
        listOfItems: updatedList,
        item: {
          key: "",
          itemDescription: "",
        },
      });
    }
  };

  handleDelete = (key) => {
    const { listOfItems } = this.state;
    const filteredItems = listOfItems.filter((currItem) => currItem.key !== key);

    this.setState({
      listOfItems: filteredItems,
    });
  };

  handleUpdate = (newDescription, key) => {
    this.setState((prevState) => ({
      listOfItems: prevState.listOfItems.map((currItem) =>
        currItem.key === key ? { ...currItem, itemDescription: newDescription } : currItem
      ),
    }));
  };

  render() {
    const { item, listOfItems } = this.state;

    return (
      <div className="To-do-app" id="my-App">
        <header>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              value={item.itemDescription}
              onChange={this.handleInput}
            />
            <button type="submit">Add Item</button>
          </form>

          <p>{item.itemDescription}</p>

          <DisplayItems
            listOfItems={listOfItems}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </header>
      </div>
    );
  }
}

export default MyCustomApp;