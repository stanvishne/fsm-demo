import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { transitions, actions } from './constants';
import FSM from '../../fsm';

// const dispatch = ({ type, payload }) => {
//     console.log('DISPATCH', type, payload);
// };

function mapStateToProps() {
    return {};
}
class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.SwFsm = new FSM({ transitions, actions });
        const initialComp = this.SwFsm.performTransition('STEP1')(
            props.dispatch,
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
            this.props.dispatch,
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

Wizard.propTypes = {
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Wizard);
