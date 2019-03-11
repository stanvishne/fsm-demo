import React from 'react';

// import axios from 'axios';
import PropTypes from 'prop-types';
import Button from './Button';

class Step2 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="step-container">
                <h3>TOP PLACES TO VISIT</h3>
                <div className="table-view">
                    {data.length ? (
                        data.map(item => (
                            <div className="table-row-ticket" key={item.id}>
                                <span>{item.name}</span>
                                <span>{item.ticket}</span>
                                <Button
                                    onClick={() =>
                                        this.props.handleClick(item.id)
                                    }>
                                    Buy ticket
                                </Button>
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

Step2.propTypes = {
    handleClick: PropTypes.func,
    data: PropTypes.array
};
export default Step2;
