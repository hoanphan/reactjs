import React from 'react';
import Note from './Node.js';
import NodeForm from './NodeForm';
import axios from 'axios';
import {connect} from 'react-redux';
class List extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={mang:['Android','iOS','node js']}
    }
    addNode(note)
    {
        this.state.mang.push(note);
        this.setState(this.state)
    }
    remove(index)
    {
        this.state.mang.splice(index,1);
        this.setState(this.state);
    }
    render(){
        return (<div>
        <NodeForm addNode={this.addNode.bind(this)}/>
            {
                this.props.mang.map((e,i)=>{
                    return <Note handleRemove={this.remove.bind(this)} key={i} index={i}>{e}</Note>
                })
            }
        </div>)
    }
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data}); // Notice this
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
}

module.exports = connect(function (state) {
    return {mang:state.mang}
})(List);
