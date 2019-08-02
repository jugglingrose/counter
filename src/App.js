import React from 'react';

import Lifecycle from './Lifecycle';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
    }

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter}>Mount Counter</button>
        <button onClick={this.unmountCounter}>Unmount Counter</button>
          { this.state.mount ?  <Lifecycle /> : null }         
      </div>
    );
  }
 
}

export default App;