import React from "react";
import { connect } from "react-redux";
import Menu from "../Menu/Menu";
class ToDoFinish extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  getDoneItem = () => {
    return this.props.list.map((item, index) => {
      if (item.status) {
        return <p key ={index}>{item.content}</p>;
      }
      return null;
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
