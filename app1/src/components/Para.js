import { Component } from "react";
class Para extends Component{
    render() {
        return <p>message:{this.props.msg} {this.props.content}</p>;
    }
}

export default Para;