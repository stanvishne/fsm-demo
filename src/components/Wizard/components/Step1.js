import React from 'react';

// import axios from 'axios';
import PropTypes from 'prop-types';

class Step1 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="step-container">
                <h3>PLEASE SELECT YOUR LOCATION</h3>
                <div className="table-view">
                    {data.length ? (
                        data.map(item => (
                            <div
                                className="table-row"
                                key={item.id}
                                onClick={() => this.props.handleClick(item.id)}>
                                <span>{item.name}</span>
                                <span>{item.capital}</span>
                            </div>
                        ))
                    ) : (
                        <div>loading...</div>
                    )}
                </div>
            </div>
        );
    }
}

Step1.propTypes = {
    handleClick: PropTypes.func,
    data: PropTypes.array
};
export default Step1;
