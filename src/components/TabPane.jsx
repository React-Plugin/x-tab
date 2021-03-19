import React, { Component } from 'react';

export default class TabPane extends Component{
    static defaultProps = {
        forceRender:true
    }
    constructor(props){
        super(props);
    }
    render(){
        let {children} = this.props;
        return (
            <div>{children}</div>
        )
    }
}