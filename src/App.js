import React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.scss';
import Sw from './components/Sw';

const App = () => {
    return (
        <div className="full-screen">
            <div>
                <h1>FSM Wizard</h1>
                <br />
                <Sw />
            </div>
        </div>
    );
};

export default hot(App);
