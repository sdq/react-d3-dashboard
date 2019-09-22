import * as d3 from 'd3';

const draw = (props) => {
    d3.select('.vis-mychart > *').remove();
    const data = props.data;
    const width = props.width;
    const height = props.height;
    let svg = d3.select('.vis-mychart').append('svg').attr('width',width).attr('height',height);
    //TODO: draw the chart
}

export default draw;