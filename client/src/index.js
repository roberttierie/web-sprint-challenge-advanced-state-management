import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import smurfReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");


const store = createStore(smurfReducer,applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>
    , 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.