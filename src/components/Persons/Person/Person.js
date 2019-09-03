import React, { Component } from 'react';
import Aux from '../../../hoc/auxillary'
import AuthContext from '../../../context/auth-context'

import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props)
    //Same as below just this pre-emptively specifies the variable to be a reference to an element
    this.inputElementRef = React.createRef()
  }
  
  //Similar to propTypes but instead of it being a map of props with their types, it refers to a context object
  static contextType = AuthContext

  componentDidMount() {
    /**
     * ref={(inputEl) => {this.inputElement = inputEl}}
     * ref passes in the reference to the current element as an argument. Now after that with that argument you can do anything
     * How it's usually done is that once you have the reference, you first store it in a class level variable, which is done
     * here through 'this.inputElement = inputEl', this means wwe are first declaring a variable called inputElement on 'this'
     * and then assigning the reference to that class level element. Once we have that reference at the class level we can
     * do anything with it as per our requirements.
     */
    //this.inputElement.focus()
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>      
    );
  }
}

export default Person;
