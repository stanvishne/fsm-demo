import React from 'react';
import Fsm from '../fsm';
const transitions = {
    START: {
        to: 'FIRST'
    },
    FIRST: {
        to: 'SECOND'
    },
    SECOND: {
        to: 'END'
    },
    END: {
        to: 'START'
    }
};

const actions = {
    START: () => {
        console.log('START');
    },
    FIRST: () => {
        console.log('FIRST');
    },
    SECOND: text => {
        console.log('SECOND');
        console.log(text);
    },
    END: () => {
        console.log('END');
    }
};

class FsmTest extends React.Component {
    constructor(props) {
        super(props);
        this.fsm = new Fsm({ initialState: 'START', transitions, actions });
        //console.log(this.fsm.getState())
    }
    handleClick = () => {
        const next = this.fsm.getNewTransistion();
        this.fsm.performTransition(next)('blabla');
    };
    render() {
        return <button onClick={this.handleClick}>Test</button>;
    }
}

export default FsmTest;
