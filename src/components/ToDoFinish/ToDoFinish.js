import React from "react";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
class ToDoFinish extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  getDoneItem = () => {
    return this.props.list.map((item, index) => {
      if (item.done) {
        return <p>{item.inputValue}</p>;
      }
    });
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

export default connect(mapStateToProps)(ToDoFinish);
