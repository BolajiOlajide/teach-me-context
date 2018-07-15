import React, { createContext, Component } from 'react';


// first we'll create a new context
export const MyContext = createContext();

// then create a provider component
export class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
