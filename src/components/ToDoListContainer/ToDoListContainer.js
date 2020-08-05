import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import Menu from "../Menu/TopMenu";
import React from "react";
import { connect } from "react-redux";
import {
  addAction,
  deleteAction,
  markAction,
  getAllItemAction,
} from "../../store/actionCreators";
import { requestAPI } from "../../network/index";
import { Layout } from "antd";
const { Footer, Content } = Layout;
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
          />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.itemList;

const mapDispatchToProps = {
  addAction,
  deleteAction,
  markAction,
  getAllItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
