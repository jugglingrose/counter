import React from 'react';

export default class Lifecycle extends React.Component {
  constructor (props) {
    console.log("consructor");
    super(props);

    this.state = {
      counter: 0
    }

    this.increment = () => this.setState({counter: this.state.counter + 1});
    this.decrement = () => this.setState({counter: this.state.counter - 1});
    
  }

  componentDidMount() {
    console.log("component did mount");
    console.log("--------------------");
  }

  render() {
    console.log("render");
    const {counter} = this.state;
    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <p>Counter: {counter} </p>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
    console.log("---------------------");
  }

  componentWillUnmount(){
    console.log("component unmounted");
    console.log("-------------------");
  }
}

