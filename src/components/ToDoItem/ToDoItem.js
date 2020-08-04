import React, { Component } from "react";

class ToDoItem extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }

  render() {
    const { content } = this.props;
    return (
      <div>
        <span
          style={{ textDecorationLine: this.props.status ? "line-through" : "none" }}
          onClick = {this.handleMark}
        >
          {content}
        </span>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }

  handleMark = () => {
    this.props.markAction(this.props.index)
  };

  handleDelete = () => {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  };
}

export default ToDoItem;
