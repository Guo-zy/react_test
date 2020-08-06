import React from "react";
import { requestAPI } from "../../network/index";
import { Input } from "antd";
const { Search } = Input;

class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    }));
  };

  handleInputSub = () => {
    //TODO
    if (this.state.inputValue === "") {
      alert("input should not be null");
      return null;
    }
    const content = this.state.inputValue;
    requestAPI({
      method: "post",
      data: {
        content,
        state: false,
      },
    })
      .then((returnValue) => {
        this.props.addAction(returnValue.data);
        alert("添加成功");
        this.setState({
          inputValue: "",
    
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
        <Search
        style ={{width : "50%"}}
          placeholder="input should not be null"
          enterButton="Add"
          size="large"
          value={this.state.inputValue}
          onSearch={this.handleInputSub}
          onChange={this.handleInputChange}
        />
    );
  }
}

export default ToDoInput;
