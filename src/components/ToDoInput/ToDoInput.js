import React from "react";
import { requestAPI } from "../../network/index";
import { Input } from 'antd';
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
      <div>
        <label htmlFor="insertArea">
          输入内容
          <Search
            placeholder="input should not be null"
            enterButton="Add"
            size="small"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onSearch={value => console.log(value)}
            allowClear = "true"
           />
          {/* <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleInputSub}> ADD </button> */}
        </label>
      </div>
    );
  }
}

export default ToDoInput;
