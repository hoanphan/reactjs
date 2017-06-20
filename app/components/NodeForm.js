import React from 'react';
import {connect} from 'react-redux'
class NodeForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={isAdding:false}
    }

    handleSubmit(e)
    {
        e.preventDefault();
        var {dispatch}=this.props;
        dispatch({type:'ADD_ITEM', item: this.refs.txt.value});
        dispatch({type:'TOGGLE_IS_ADDING'})
    }
    toggle()
    {
       var {dispatch}=this.props;
       dispatch({type:'TOGGLE_IS_ADDING'})
    }
    render(){
        if(this.props.isAdding)
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

module.exports = connect(function (state) {
    return {isAdding:state.isAdding}
})(NodeForm);
