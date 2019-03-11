import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { transitions, actions } from './constants';
import FSM from '../../fsm';

function mapStateToProps({ data }) {
    return {
        data
    };
}
class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.SwFsm = new FSM({ transitions, actions });
        const initialComp = this.SwFsm.performTransition('STEP1')(
            props.dispatch
        );
        this.state = {
            active: this.SwFsm.getState(),
            activeComponent: initialComp
        };
    }
    handleClick = payload => {
        const next = this.SwFsm.getNewTransistion();
        const newActiveComp = this.SwFsm.performTransition(next)(
            this.props.dispatch,
            payload
        );
        this.setState({
            activeComponent: newActiveComp
        });
    };
    render() {
        const Comp = this.state.activeComponent;
        const { data } = this.props;
        //console.log(Comp)
        return (
            <div>
                <Comp data={data} handleClick={this.handleClick} />
            </div>
        );
    }
}

Wizard.propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.array
};

export default connect(mapStateToProps)(Wizard);
