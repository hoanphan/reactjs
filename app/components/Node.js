import React from 'react';

class Node extends React.Component{

    remove()
    {
        const {index,handleRemove}=this.props;
        handleRemove(index);

    }
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.remove.bind(this)}>delete {this.props.index}</button>
            </div>
        )
    }
}

module.exports = Node;
