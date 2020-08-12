import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import Menu from "../Menu/TopMenu";
import React from "react";
import { requestAPI } from "../../network/index";
import { Layout } from "antd";
import {
  addAction,
  deleteAction,
  markAction,
  getAllItemAction,
} from "../../store/action/actionCreators";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
const { Content } = Layout;
class ToDoListContainer extends React.Component {
  componentDidMount() {
    requestAPI({
      method: "get",
    })
      .then((dataList) => {
        this.props.getAllItemAction(dataList.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    return (
      <div>
        <Menu />
        <Layout style={{ textAlign: "center", background: "#fff" }}>
          <Content>
            <p style={{ fontSize: "25px" }}>ToDoList</p>
            <ToDoInput addAction={this.props.addAction} />
          </Content>
          <ToDoList
            list={this.props.list}
            deleteAction={this.props.deleteAction}
            markAction={this.props.markAction}
            loading={this.props.loading}
          />
        </Layout>
      </div>
    );
  }
}

ToDoListContainer.propTypes = {
  deleteAction : PropTypes.func.isRequired,
  markAction : PropTypes.func.isRequired,
  addAction : PropTypes.func.isRequired,
  loading : PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  list: state.toDo.list,
  loading: state.loadToggle.loading,
});

const mapDispatchToProps = {
  addAction,
  deleteAction,
  markAction,
  getAllItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
