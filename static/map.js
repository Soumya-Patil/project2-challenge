function map_init() {
  console.log("Hello!");
  var width = 800;
      var height = 550;
      var center = [width / 2, height / 2];
      var defaultFill = "#e0e0e0"  ; 


   var colorScale = d3.scale.linear().range(["#faf5f5", "#a3314C"]).interpolate(d3.interpolateLab);
  ​
  var countryById = d3.map(); // will have id's as keys for countries; see typeAndSet()
  ​
  var projection = d3.geo.mercator()
      .scale(150)
      .translate([width/2-20, height/2+30]);
  ​
  var path = d3.geo.path()
      .projection(projection);
}
map_init();