import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import Menu from "../Menu/Menu"
import React from "react";
import { connect } from "react-redux";
import { addAction, deleteAction, markAction } from "../../store/actionCreators";

class ToDoListContainer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Menu/>
        <ToDoInput addAction={this.props.addAction} />
        <ToDoList
          list={this.props.list}
          deleteAction={this.props.deleteAction}
          markAction = {this.props.markAction}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state.itemList;

const mapDispatchToProps = {
  addAction,
  deleteAction,
  markAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
