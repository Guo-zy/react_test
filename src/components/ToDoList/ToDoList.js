import React, { Fragment, Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import {deleteItem} from "../../network/index"

class ToDoList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleInputDelete = (index) => {
    deleteItem({
      method:'delete',
      url : index
    })
    this.props.deleteAction(index);
  };
  getToDoItem = () => {
    return this.props.list.map((item, index) => (
      <ToDoItem
        key={index}
        content={item.content}
        index={item.id}
        status = {item.status}
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
