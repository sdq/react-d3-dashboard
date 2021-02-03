import React, { Component } from 'react';
import Histogram from '../../charts/Histogram';
import './view7.css';

export default class View7 extends Component {
    render() {
        const { data } = this.props;
        const width = 260;
        const height = 200;
        return (
            <div id="view7" className="pane">
                <div className="header">Frequency vs Age</div>
                <Histogram data={data} width={width} height={height} />
            </div>
        );
    }
}
