var mapSvg = d3.select(".mapSvg");

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
        //transition(accident)

        accident.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });

        //start(accident);

        console.log(accident.length);

    })
});

function transition(accidents) {
    for (var i = 0; i < accidents.length; i++) {

        var r = 10;
        var p = projection([accidents[i].long, accidents[i].lat])
        var circle = svg.append("circle")
            .attr("r", 1)
            .style("opacity", 0.7)
            .attr("fill","red")
            //"#"+((1<<24)*Math.random()|0).toString(16)
            .attr("transform", "translate(" + p + ")");

        circle.transition()
            .duration(2000)
            .attr("r", r)
            .remove();

    }
}

var timerId = null;
var start = function(accidents) {

    var iAcc = new Date(accidents[0].date);

    if (timerId === null) {
        timerId = setInterval(function() {

            transition(accidents.filter(function (d) {
                var dat = new Date(d.date);

                return  dat.getDay() == iAcc.getDay() && dat.getMonth() == iAcc.getMonth()
            }));

            iAcc.setDate(iAcc.getDate() + 1);

        }, 2500);
    }
};



