import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
class Step3 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="step-container">
                <h3>Congratulations</h3>
                <div className="table-view">
                    {data.length ? (
                        data.map(item => (
                            <div className="table-row-ticket" key={item.id}>
                                <span>{item.name}</span>
                            </div>
                        ))
                    ) : (
                        <div>loading...</div>
                    )}
                    <br />
                    <div>
                        Thank you, your ticket has been successfully purchased
                    </div>
                    <br />
                    <Button onClick={() => this.props.handleClick()}>
                        Bye another ticket
                    </Button>
                </div>
            </div>
        );
    }
}

Step3.propTypes = {
    handleClick: PropTypes.func,
    data: PropTypes.array
};
export default Step3;
