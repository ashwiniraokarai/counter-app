import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters.jsx";

//TEST with some basic mark-up: ReactDOM.render(<h1>hullo</h1>, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(<Counters />, document.getElementById("root"));

//ReactDOM.render(<Counter />, document.getElementById("root"));

/*Ash - Remember:
//your index.html has come predefined with a div with id="root", which is the primary container for your app. You're simply referencing that html element here
//Counter is the class you created in your component counter.jsx. Ideally, you'd call your App class/function here instead
//You can also write ANY markup like <h1>hello world</h1> instead to keep is super super simple:
    //ReactDOM.render(<h1>hullo</h1>, document.getElementById("root")); will render simply that: hullo.
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
