import React, { Component } from "react";

class Counter extends Component {
  state = {
    //the line below can be removed safely. Keeping it here for history of evolution. the state of this component is now being controlled by its parent(counters component) via props.
    //count: this.props.countLocal,
    //image: "https://picsum.photos/200"
    tags: ["subitem1", "subitem2", "subitem3"]
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <img src={this.state.image} alt="natural scenery" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {/*className value is equal to badgeClasses value, which is determined by the if-condition evaluation in the getBadgeClasses() method that className is assigned to call*/}
          {this.getCount()}
        </span>
        <button
          style={{ fontSize: 18 }}
          className="btn btn-secondary btn-sm m-2"
          onClick={() => {
            this.props.onIncrement(this.props.countersArrayObject);
          }}
        >
          Increment
        </button>
        <button
          className="m-2 btn btn-danger btn-sm"
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
        >
          Delete
        </button>
        <div>{this.getList()}</div>
      </React.Fragment>
    );
  }

  //If count = 0, then badge classes we want are: badge, m-2, badge-warning (yellow color). Otherwise, we want badge, m-2, badge-primary (blue color)
  getBadgeClasses() {
    let badgeClasses = "badge m-2";
    badgeClasses +=
      this.props.countLocal === 0 ? " badge-warning" : " badge-primary";
    return badgeClasses;
  }

  getCount() {
    //Notice the ABSENCE of function keyword since the function is inside a class
    var count = this.props.countLocal;
    return count === 0 ? "zero" : count;
  }

  getList() {
    let errorMessage = "No tags to display";
    let list = (
      <ul>
        {this.state.tags.map(function(tag) {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    );

    return this.state.tags.length === 0 ? errorMessage : list;
  }
}

export default Counter;
