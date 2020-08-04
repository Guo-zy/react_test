import React from "react";

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
    if (this.state.inputValue !== "") {
      this.props.addAction(this.state.inputValue);
      this.setState({
        inputValue: "",
      });
    } else alert("input should not be null");
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
          <button onClick={this.handleInputSub}> 提交 </button>
        </label>
      </div>
    );
  }
}

export default ToDoInput;
