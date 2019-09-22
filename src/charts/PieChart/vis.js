import * as d3 from 'd3';

const draw = (props) => {
    d3.select('.vis-piechart > *').remove();
    const width = props.width;
    const height = props.height;
    // d3.select('.vis-piechart').append('svg').attr('width', width).attr('height', height)
    let svg = d3.select('.vis-piechart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    let dataset = [
        { label: 'Male', count: 50 },
        { label: 'Famale', count: 20 },
        { label: 'Unknown', count: 30 }
    ];

    let radius = Math.min(width, height) / 2;
    let color = d3.scaleOrdinal(d3.schemeCategory20b);
    //     var color = d3.scaleOrdinal()
    //   .range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);


    let arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    let pie = d3.pie()
        .value(function (d) { return d.count; })
        .sort(null);

    let path = svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function (d, i) {
            return color(d.data.label);
        });
}

export default draw;