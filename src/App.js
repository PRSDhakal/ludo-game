import React from 'react'
import { Board } from './components/board'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './components/home'

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/board" component={Board} />
        </Router>


    )
}

export default App;
