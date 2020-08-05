import React, { Fragment, Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

class ToDoList extends Component {
  
  getToDoItem = () => {
    //TODO
    return this.props.list.map((item, index) => (
      <ToDoItem
        key={index}
        item ={item}
        deleteAction={this.props.deleteAction}
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
