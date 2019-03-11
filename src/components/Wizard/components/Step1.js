import React from 'react';

// import axios from 'axios';
import PropTypes from 'prop-types';

class Step1 extends React.Component {
    render() {
        //const { list } = this.state;
        const { data } = this.props;
        return (
            <div className="step-container">
                STEP 1
                <div className="table-view">
                    {data.map(item => (
                        <div
                            className="table-row"
                            key={item.id}
                            onClick={() => this.props.handleClick(item.id)}>
                            <span>{item.name}</span>
                            <span>{item.capital}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Step1.propTypes = {
    handleClick: PropTypes.func,
    data: []
};
export default Step1;
