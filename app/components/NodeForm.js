import React from 'react';

class NodeForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={isAdding:false}
    }

    handleSubmit(e)
    {
        e.preventDefault();
        this.props.addNode(this.refs.txt.value);
        this.refs.txt.value="";
        this.toggle();
    }
    toggle()
    {
        this.state.isAdding=!this.state.isAdding;
        this.setState(this.state);
    }
    render(){
        if(this.state.isAdding)
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Enter your text" ref="txt"/>
                <br/>
                <button>add</button>
            </form>
        )
        return <button onClick={this.toggle.bind(this)}>+</button>
    }
}

module.exports = NodeForm;