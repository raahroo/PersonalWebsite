 // javascript
  var data = [
    {"language": "React", "percentage": 13}, 
    {"language": "Jquery", "percentage": 11},
    {"language": "Angular", "percentage": 9},
    {"language": "Ember", "percentage": 6},
    {"language": "Vue.js", "percentage": 5},
  ]; 

  var svgWidth = 250, svgHeight = 250, radius =  Math.min(svgWidth, svgHeight) / 2;
  var svg = d3.select('#graphic')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  //Create group element to hold pie chart    
  var g = svg.append("g")
  .attr("transform", "translate(" + radius + "," + radius + ")") ;

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var pie = d3.pie().value(function(d) { 
  return d.percentage; 
  });

  var path = d3.arc()
  .outerRadius(radius)
  .innerRadius(0);

  var arc = g.selectAll("arc")
  .data(pie(data))
  .enter()
  .append("g");

  arc.append("path")
  .attr("d", path)
  .attr("fill", function(d) { return color(d.data.percentage); });
      
  var label = d3.arc()
  .outerRadius(radius)
  .innerRadius(0);
          
  arc.append("text")
  .attr("transform", function(d) { 
      return "translate(" + label.centroid(d) + ")"; 
  })
  .attr("text-anchor", "middle")
  .text(function(d) { return d.data.language });