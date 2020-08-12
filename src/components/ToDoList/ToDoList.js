import React, { Fragment, Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { List , Spin} from "antd";

class ToDoList extends Component {
  getToDoItem = () => {
    return (
      <Spin spinning = {this.props.loading}>
      <List
        style={{ width: "50%", margin: "10px auto" }}
        bordered
        dataSource={this.props.list}
        renderItem={(item) => (
          <List.Item  >
            {/* todo beautify*/}
            <ToDoItem
              key={item.id}   
              item={item}
              deleteAction={this.props.deleteAction}
              markAction={this.props.markAction}
            />
          </List.Item>
        )}
      />
      </Spin>
    );
  };
  render() {
    return <Fragment>{this.getToDoItem()}</Fragment>;
  }
}

export default ToDoList;
