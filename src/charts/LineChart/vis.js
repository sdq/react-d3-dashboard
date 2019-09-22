import * as d3 from 'd3';

const draw = (props) => {
    d3.select('.vis-linechart > *').remove();
    const width = props.width;
    const height = props.height;
    // d3.select('.vis-linechart').append('svg').attr('width', width).attr('height', height)

    const data = [
        
        { "date": "1-Apr-12", "value": 58.13 },
        { "date": "2-Apr-12", "value": 59.13 },
        { "date": "3-Apr-12", "value": 60.13 },
        { "date": "4-Apr-12", "value": 61.13 },
        { "date": "5-Apr-12", "value": 62.13 },
        { "date": "6-Apr-12", "value": 63.13 },
        { "date": "7-Apr-12", "value": 64.13 },
        { "date": "8-Apr-12", "value": 65.13 },
        
    ]
    

    

    var margin = { top: 10, right: 10, left: 50 }

    var svg = d3.select('.vis-linechart').append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    

    // parse the date / time
    var parseTime = d3.timeParse("%d-%b-%y");

    data.forEach(function (d) {
        d.date = parseTime(d.date);
        d.value = +d.value;
    });

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    // var x = d3.scaleLinear()
    //   .domain([1,100])
    //   .range([ 0, width ]);
    var y = d3.scaleLinear().range([height, 0]);
    console.log(data)

    // Scale the range of the data
    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    // define the line
    var valueline = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.value); });

    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
}

export default draw;