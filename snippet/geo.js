navigator.geolocation.getCurrentPosition(function(position) {
  var coords = [position.coords.latitude, position.coords.longitude];
  orbit.flyToLatLon(coords, 3);
});
