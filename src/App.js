import React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.scss';
import Wizard from './components/Wizard';
const App = () => {
    return (
        <div className="full-screen">
            <div>
                <h1>FSM Wizard</h1>
                <br />
                <Wizard />
            </div>
        </div>
    );
};

export default hot(App);
