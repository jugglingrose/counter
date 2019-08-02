import React from 'react';

import Lifecycle from './Lifecycle';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0
    }

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter}>Mount Counter</button>
        <button onClick={this.unmountCounter}>Unmount Counter</button>
        <button onClick={this.ignoreProp}>ignoreProp</button>
          { this.state.mount ?  <Lifecycle ignoreProp={this.state.ignoreProp}/> : null }         
      </div>
    );
  }
 
}

export default App;
