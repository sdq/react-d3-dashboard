import React, { Component } from 'react';
import draw from './vis';

export default class Histogram extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        draw(this.props, this.state);
    }

    componentDidUpdate(preProps) {
        draw(this.props, this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="vis-histogram" />
                <div>
                    <label># bins</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        step="1"
                        value={this.state.value}
                        id="nBin"
                        onChange={this.handleChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}
