import React from 'react';
import './App.css';
import Main from "./Pages/Main";
import Detail from "./Pages/Detail";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import reducers from './Reducers/index';
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

function App() {
    const enhancers = compose(
        applyMiddleware(thunk)
    );
    const store = createStore(reducers, enhancers);

    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Route path={"/"} exact component={Main}/>
                    <Route path={"/:id"} exact component={Detail}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;