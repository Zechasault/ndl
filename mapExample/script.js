var body = d3.select("body");

var svg = body.append("svg");

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
        .attr("stroke","red")
        .attr("d", path);

    d3.json("db.json", function(accident) {
        svg.selectAll("circles.points")
            .data(accident)
            .enter()
            .append("circle")
            .attr("r", 1)
            .attr("transform", function (d) {
                return "translate(" + projection([d.lo, d.la]) + ")";
            });

        console.log(accident.length);
    })


});




