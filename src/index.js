import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initialState = {
  count: 10,
  step: 2
};

function reducer(state = initialState, action) {
  switch(action.type){
    case 'INCREMENT':{
      return {...state, count: state.count+state.step}
    }
    case 'DECREMENT':{
      return {...state, count: state.count-state.step}
    }
    case 'SET_STEP':{
      const {newStep} = action;
      return {...state, step: newStep}
    }
    default: return state;
  }
}

const store = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
