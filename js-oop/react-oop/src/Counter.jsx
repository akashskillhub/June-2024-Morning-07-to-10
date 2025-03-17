import { Component } from "react";

// <2019
// class        => statefull component
// fucntion     => stateless component

// next js
// regular expression
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 10 }
        // console.log(props)
    }
    inc = () => {
        this.setState({ count: this.state.count + 1 })
    }
    dec = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return <div>
            <h1>{this.props.brand}</h1>
            <div> {this.props.children}</div>
            <button onClick={this.dec}>-1</button>
            {this.state.count}
            <button onClick={this.inc}>+1</button>
        </div>
    }
}

export default Counter