import React from "react";
import { insertItem } from "../../network/index";

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
    if (this.state.inputValue === "") return null;
    const content = this.state.inputValue;
    insertItem({
      method: "post",
      data: {
        content,
        state: false,
      },
    }).then((returnValue) => {
      this.props.addAction(returnValue.data);
      alert("添加成功")
    });

    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="insertArea">
          输入内容
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleInputSub}> 查询 </button>
        </label>
      </div>
    );
  }
}

export default ToDoInput;
