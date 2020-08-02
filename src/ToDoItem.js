import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const {content} =  this.props;
        return (
            <div
                onClick={this.handleDelete}>
                {content}
            </div>
        )
    }

    handleDelete() {
        const{deleteItem , index} = this.props;
        deleteItem(index);
    }
}

export default ToDoItem