import React from 'react';
import Note from './Node.js';
import NodeForm from './NodeForm';
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
                this.state.mang.map((e,i)=>{
                    return <Note handleRemove={this.remove.bind(this)} key={i} index={i}>{e}</Note>
                })
            }
        </div>)
    }
}

module.exports = List;
