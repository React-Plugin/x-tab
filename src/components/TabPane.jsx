import React, { Component } from 'react';

export default class TabPane extends Component {
    static defaultProps = {
        forceRender: true
    }
    constructor(props) {
        super(props);
        this.props.onLoad(props);
    }
    componentWillUnmount(){
        this.props.unLoad(this.props);
    }
    componentDidUpdate( prevProps, prevState ){
        if( prevProps.value !== this.props.value || prevProps.tab!==this.props.tab){
            this.props.onLoad(this.props);
        }
    }
    render() {
        let { children, className, tab, value, active, onSelect, forceRender,style } = this.props;
        let cls = 'x-tabs-header-item';
        let clsCon = 'x-tabs-item';
        if (className) {
            clsCon += ' ' + className;
        }
        if (active == value) {
            cls += " active";
            clsCon += " active";
        }
        // let headers = [];
        let contents = null;
        // headers.push(<div className={cls} key={value} onClick={onSelect.bind(this, value)}>{tab}</div>);
        if (forceRender === true || active == value) {
            contents = <div className={clsCon} style={style}>{children}</div>;
        }
        // return <div><div className="x-tabs-header">{headers}</div>{contents}</div>;
        return contents;
    }
}