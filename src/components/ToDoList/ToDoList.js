import React, { Fragment, Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

class ToDoList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleInputDelete = (index) => {
    this.props.deleteAction(index);
  };
  getToDoItem = () => {
    return this.props.list.map((item, index) => (
      <ToDoItem
        key={index}
        content={item.inputValue}
        index={index}
        done = {item.done}
        deleteItem={this.handleInputDelete}
        markAction={this.props.markAction}
      />
    ));
  };
  render() {
    return (
      <Fragment>
        <ul> {this.getToDoItem()} </ul>
      </Fragment>
    );
  }
}


export default ToDoList;
