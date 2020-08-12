import React from "react";
import { connect } from "react-redux";
import Menu from "../Menu/TopMenu";
import ToDoList from "../ToDoList/ToDoList";
import {
  deleteAction,
  markAction,
} from "../../store/action/actionCreators";
import PropTypes from 'prop-types'
class ToDoFinish extends React.Component {
  getDoneItem = () => {
    const doneList = this.props.list.filter((item) => item.status);
    return (
      <ToDoList
        list={doneList}
        deleteAction={this.props.deleteAction}
        markAction={this.props.markAction}
        loading={this.props.loading}
      />
    );
  };
  render() {
    return (
      <div>
        <Menu />
        <p style={{ fontSize: "25px" , textAlign:"center" }}>Finished List</p>
        {this.getDoneItem()}
      </div>
    );
  }
}
//TODO bug
const mapStateToProps = (state) => {
  return {
    list:state.toDo.list,
    loading : state.loadToggle.loading
  };
};

const mapDispatchToProps = {
  deleteAction,
  markAction,
};
//TODO add proptypes

ToDoFinish.propTypes = {
  deleteAction : PropTypes.func.isRequired,
  markAction : PropTypes.func.isRequired,
  loading : PropTypes.bool.isRequired,
  
}

export default connect(mapStateToProps , mapDispatchToProps)(ToDoFinish);
