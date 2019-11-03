import React from "react";
import { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Counters from "./components/counters.jsx";
import { throwStatement } from "@babel/types";

class App extends Component {
  //state object was moved up from counters component
  state = {
    countersArray: [
      { id: 1, count: 4 },
      { id: 2, count: 3 },
      { id: 3, count: 2 },
      { id: 4, count: 1 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.countersArray.filter(element => {
              return element.count > 0;
            }).length
          }
        />
        <main role="main" class="container">
          <Counters
            countersArray={this.state.countersArray}
            onIncrement={this.handleIncrementButton}
            onDelete={this.handleDeleteButton}
            onReset={this.handleResetButton}
          />
        </main>
      </React.Fragment>
    );
  } //end render()

  //handleIncrementButton method was moved up from counters component
  //----------------------------------------------------------------------------------------------------------------------------------
  //Increment button lives in counter component but is HANDLED in this component because the array it affects (counterArray) is OWNED by this component.
  //This method is made available to counter component via the onIncrement attribute and acccessed by counter component vis this.Props
  handleIncrementButton = countersArrayObject => {
    //Making sure id from state object is flowing through a.k.a test the plumbing first
    console.log(
      "From handleIncrementButton() in counters component. counter id: ",
      countersArrayObject
    );
    //Create a copy/clone the countersArray array using the "spread" operator.NOTE: array.map can be used an alternative to simply return every element of the array
    const countersArrayWithIncrement = [...this.state.countersArray];
    //Grab the array index of the passed in array element(object) using indexOf() method and store it to const.
    const arrayIndex = countersArrayWithIncrement.indexOf(countersArrayObject);
    //Using the index, access and operate on the specific element in the copied array
    //If you simply increment the count value like below, it affects the original state array directly, because of how object in array and Spread Operator work in JS (remember, that's not desirable. You need to change values only through setState)
    //countersArrayWithIncrement[countersArrayObjectIndex].count += 1;
    //Therefore, i) you need to OBTAIN a COPY of the OBJECT WITHIN THE ARRAY (i.e, the element), ii) overwrite the ORIGINAL with the COPY AFTER which iii) you can operate on the copied element instead. Here we are OVERWRITING the array element with a copy
    //{ ...countersArrayWithIncrement[arrayIndex] } gives you a COPY of the object. By assigning it to the object countersArrayWithIncrement[arrayIndex], we OVERWRITE the original object with the NEW object (copy). So. it's pointing to a NEW object altogether.
    countersArrayWithIncrement[arrayIndex] = {
      ...countersArrayWithIncrement[arrayIndex]
    };
    countersArrayWithIncrement[arrayIndex].count += 1;
    /* The above 2 steps are equivalent to these 3 steps:
      const objectWithIncrement = { ...countersArrayWithIncrement[arrayIndex] };
  
      //Update (increment) the copy of the object
      objectWithIncrement.count += 1;
  
      //Replace the object in the copied array with the updated element
      countersArrayWithIncrement[arrayIndex] = objectWithIncrement;
      */
    //TEST THE ORIGINAL ARRAY in STATE BEFORE YOU FINALLY SET STATE (STATE should NOT have got affected because you haven't set it yet. If this gives an incremented value, we have a problem)
    //console.log(this.state.countersArray[arrayIndex]);
    //Set State
    this.setState({
      countersArray: countersArrayWithIncrement
    });
  }; //end handleIncrementButton

  //handleDeleteButton method was moved up from counters component
  //----------------------------------------------------------------------------------------------------------------------------------
  //Delete button lives in counter component but is HANDLED in this component because the array it affects (counterArray) is OWNED by this component.
  //This method is made available to counter component via the onDelete attribute and acccessed by counter component vis this.Props
  handleDeleteButton = counterLocalID => {
    //Making sure id from props is flowing through
    console.log(
      "From handleDeleteButton() in counters component. counter id: ",
      counterLocalID
    );
    //Build a NEW array same as the countersArray EXCEPT the id that needs to be DELETED
    const countersArrayWithDelete = this.state.countersArray.filter(
      c => c.id !== counterLocalID
    );
    //set the countersArray (an array AND a property of the state OBJECT) to the NEW array that has the desired array element removed
    this.setState({ countersArray: countersArrayWithDelete });
  };

  //handleResetButton method was moved up from counters component
  //----------------------------------------------------------------------------------------------------------------------------------
  handleResetButton = () => {
    //set count value of every object in this.state.countersArray to 0
    const countersArrayWithReset = this.state.countersArray.map(c => {
      c.count = 0;
      return c; //since you have a "block" i.e, statements wrapped in {}, you'll need to do an explicit return of the object even though it's an arrow function
    });
    this.setState({ countersArray: countersArrayWithReset });
  };
}

export default App;
