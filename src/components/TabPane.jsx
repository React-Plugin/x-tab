import React, { Component } from 'react';

export default class TabPane extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {children,className} = this.props;
        return (
            <div className={className}>{children}</div>
        )
    }
}