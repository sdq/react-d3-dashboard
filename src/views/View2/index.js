import React, { Component } from 'react';
import './view2.css';
import PieChart from '../../charts/PieChart';

export default class View2 extends Component {
    render() {
        const {data} = this.props;
        const width = 260;
        const height = 260;
        return (
            <div id='view2' className='pane'>
                <div className='header'>Gender</div>
                <PieChart data={data} width={width} height={height} />
            </div>
        )
    }
}