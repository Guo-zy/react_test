import React, { Fragment, Component } from 'react';
import './ToDoList.css';
import ToDoItem from './ToDoItem';



class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSub = this.handleInputSub.bind(this);
        this.handleInputDelete = this.handleInputDelete.bind(this);
    }
    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({ inputValue: value }))
    }
    handleInputSub() {
        this.setState((preState)=>({
            list:[...preState.list , preState.inputValue],
            inputValue : ''
        }))
      
    }
    handleInputDelete(index) {
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index, 1);
            return {list}
        })
    }

    getToDoItem() {
        return (
            this.state.list.map((item, index) => <ToDoItem
                key = {index}
                content={item}
                index={index}
                deleteItem={this.handleInputDelete} />
            
            )

        )
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/*这是多行注释*/}
                    {
                        //这是单行注释
                    }
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange} />
                    <button onClick={this.handleInputSub}>提交</button>
                </div>
                <ul>
                    {this.getToDoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default ToDoList;