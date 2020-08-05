import React, { Component } from "react";
import { requestAPI } from "../../network/index";
class ToDoItem extends Component {
  render() {
    const { content } = this.props.item;
    return (
      <div>
        <span
          style={{
            textDecorationLine: this.props.item.status
              ? "line-through"
              : "none",
          }}
          onClick={this.handleMark}
        >
          {content}
        </span>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }

  handleMark = () => {
    const id = this.props.item.id;
    const status = !this.props.item.status;
    requestAPI({
      method: "put",
      url: id,
      data: {
        status,
      },
    })
      .then(() => {
        this.props.markAction(this.props.item);
      })
      .catch((err) => {
        alert("修改失败");
      });
  };

  handleDelete = () => {
    const id = this.props.item.id;
    requestAPI({
      method: "delete",
      url: id,
    });
    this.props.deleteAction(this.props.item);
  };
}

export default ToDoItem;
