import React, { Component } from 'react'
import d3 from 'd3'
class Form extends Component {

    componentDidMount(){
        var mapSvg = d3.select(this.refs.mapSvg);

        var svg = mapSvg.append("svg");

        svg.attr({"width":"1000px","height":"1000px"});

        var path = d3.geo.path();

        var projection = d3.geo.conicConformal()
            .center([2.454071, 46.279229])
            .scale(3000)
            .translate([300,300]);

        path.projection(projection);

        d3.json("departments.json", function(geoJSON) {
            var map=svg.selectAll("path").data(geoJSON.features)

            map.enter()
                .append("path")
                .attr("fill","white")
                .attr("stroke","black")
                .attr("d", path);

            d3.json("db2.json", function(accident) {
                svg.selectAll("circle")
                    .data(accident)
                    .enter()
                    .append("circle")
                    .attr("r", 2)
                    .attr("fill","red")
                    .style("opacity", 0.2)
                    .attr("transform", function (d) {
                        return "translate(" + projection([d.long, d.lat]) + ")";
                    });


            })
        });






    }

    render() {
        return (
            <div ref="mapSvg">

            </div>
        )
    }
}

export default Form
