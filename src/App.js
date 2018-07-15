import React, { Component, Fragment } from 'react';

// context
import { MyContext, MyProvider } from './context';


const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {
            (context) => (
              <Fragment>
                <p>Name: {context.state.name}</p>
                <p>Age: {context.state.age}</p>
                <p>Cool: {context.state.cool ? '✅' : 'X'}</p>
                <button onClick={context.growAYearOlder}>🍥🍰🎂</button>
              </Fragment>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          I'm the app
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
