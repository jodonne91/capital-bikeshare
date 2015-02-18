/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about
    the station at 23rd and Crystal Drive (which is ID "31011")
*/


var localStation = function(callback) {

  $.ajax({
    url: "/stations",
    method: "GET",
    success: function(data){

      for (var i = 0 ; i < data.length ; i++){
        
        if(data[i].name === "23rd & Crystal Dr")
        
        {
          callback(data[i]);
        }

      }

    }

  })


}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    the northernmost station in the Capital Bikeshare system.
  (For simplicity's sake, the northernmost station is the one
    with the highest latitude.)
*/
var northernmostStation = function(callback) {

  $.ajax({
    url: "/stations",
    method: "GET",
    success: function(data){

      var sorted = _.sortBy(data, function(point)
      {
        return point.latitude;
      })

      callback(sorted[(sorted.length-1)])


    }

  })

  
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    a single, random station in the Capital Bikeshare system.
*/
var randomStation = function(callback) {

  $.ajax({
    url: "/stations",
    method: "GET",
    success: function(data){

      callback(data[6])


    }

  })
  
}


/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that currently have 0 bikes.
*/
var emptyStations = function(callback) {

  $.ajax({
    url: "/stations",
    method: "GET",
    success: function(data){

      var result = _.filter(data, function(point) {
        return point.bikes === 0;
      });

      callback(result);

    }

  })
  
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that have been updated
    in the last 15 minutes.
*/

var recentStations = function(callback) {

  $.ajax({
    url: "/stations",
    method: "GET",
    success: function(data) {

      var currentTime = new Date();

      var result = _.filter(data, function(points){
        return points.lastUpdate > (currentTime - 15*60)
      })

      callback(result)

    }
  })
}
