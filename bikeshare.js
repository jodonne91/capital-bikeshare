var stationData = require("./bikeshare_data")

var inflateStationData = function(data) {
  return data.stations.map(function(station){
    return {
      id: station.n,
      name: station.s,
      latitude: station.la,
      longitude: station.lo,
      docks: station.da,
      bikes: station.ba,
      lastUpdate: station.lu
    }
  })
}

var getStationData = function(callback) {
  callback(null, inflateStationData(stationData))
}

exports = module.exports = {

  stations: function(req, res, next) {
    getStationData(function(err, data){
      res.json(data)
    })
  }

}