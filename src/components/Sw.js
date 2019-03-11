import React from 'react';

import { transitions, actions } from '../constants/swapiFsm';
import FSM from '../fsm';

const dispatch = ({ type, payload }) => {
    console.log('DISPATCH', type, payload);
};
class Sw extends React.Component {
    constructor(props) {
        super(props);
        this.SwFsm = new FSM({ initialState: 'PEOPLE', transitions, actions });
        const initialComp = this.SwFsm.performTransition('PEOPLE')(
            dispatch,
            'http://google.com'
        );
        this.state = {
            active: this.SwFsm.getState(),
            activeComponent: initialComp
        };
    }
    handleClick = () => {
        const next = this.SwFsm.getNewTransistion();
        const newActiveComp = this.SwFsm.performTransition(next)(
            dispatch,
            'http://dsdsd'
        );
        this.setState({
            activeComponent: newActiveComp
        });
    };
    render() {
        const Comp = this.state.activeComponent;
        //console.log(Comp)
        return (
            <div onClick={this.handleClick}>
                <Comp />
            </div>
        );
    }
}

export default Sw;
