import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
    /* useEffect is componentDidUpdate & componentDidMount combined in one react hook.

    When no second argument is passed then useEffect is run everytime simultaneously with a render of the component, that
    means on the initial render and every render on any updates henceforth.

    The second argument to useEffect can be an array of props passed to the component. In that case the useEffect only runs
    when the render is being triggered by changes to any of the props mentioned in the array, otherwise for changes to props
    not mentioned in the array the useEffect won't run. Obviously for the initial render being equivalent to
    componentDidMount it would run anyway.

    If an empty array is passed, then it signifies that it would effectively watch no props for updates and as a result
    only time it would run is during componentDidMount

    Now you can opt to return a function from the useEffect method, in case you do return a function, then that function is
    executed after the render cycle but before the lifecycle hook of componentDidUpdate, so what it means is that it would
    run before the main useEffect code block just after render.
    When a function is returned from useEffect in conjunction with empty array argument,
    then the returned function effectively works as componentWillUnmount.
        
    */
    useEffect(() => {
      console.log("[Cockpit.js] Use effect")
      //Effectively making the click action on componentDidMount
      toggleButtonRef.current.click()
      return () => {
        console.log("[Cockpit.js] Use effect return")
      }
    },[/**props.person */])


    //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
    const toggleButtonRef = useRef(null)
    //useContext takes in a context object and returns a reference to it
    const authContext = useContext(AuthContext)
    //authContext.authenticated

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>{(context) => <button onClick={context.login}>Login</button>}</AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);