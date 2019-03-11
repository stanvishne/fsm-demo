import React from 'react';
import axios from 'axios';
class Step1 extends React.Component {
    state = {
        list: []
    };
    componentDidMount() {
        let self = this;
        axios
            .get('/api/step1')
            .then(function(response) {
                console.log(response.data);
                self.setState({
                    list: response.data.list
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
    setData = list => {
        this.setState({
            list
        });
    };
    render() {
        const { list } = this.state;
        return (
            <div className="step-container">
                STEP 1
                <div className="table-view">
                    {list.map(item => (
                        <div className="table-row" key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.capital}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Step1;
