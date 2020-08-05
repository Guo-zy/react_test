import React from "react";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
import ToDoList from "../ToDoList/ToDoList";
import {
  deleteAction,
  markAction,
} from "../../store/actionCreators";
class ToDoFinish extends React.Component {
  getDoneItem = () => {
    const doneList = this.props.list.filter((item) => item.status);
    return (
      <ToDoList
        list={doneList}
        deleteAction={this.props.deleteAction}
        markAction={this.props.markAction}
      />
    );
  };
  render() {
    return (
      <div>
        <Menu />
        <p>已完成的任务</p>
        {this.getDoneItem()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.itemList;
};

const mapDispatchToProps = {
  deleteAction,
  markAction,
};


export default connect(mapStateToProps , mapDispatchToProps)(ToDoFinish);
