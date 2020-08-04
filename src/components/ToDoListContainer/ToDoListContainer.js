import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import Menu from "../Menu/Menu";
import React from "react";
import { connect } from "react-redux";
import {
  addAction,
  deleteAction,
  markAction,
  getAllItemAction
} from "../../store/actionCreators";
import { requestItem } from "../../network/index";
class ToDoListContainer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    requestItem({
      method: "get",
    }).then((dataList) => {
        this.props.getAllItemAction(dataList.data)
    });
  }
  render() {
    return (
      <div>
        <Menu />
        <ToDoInput addAction={this.props.addAction} />
        <ToDoList
          list={this.props.list}
          deleteAction={this.props.deleteAction}
          markAction={this.props.markAction}
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
  getAllItemAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
