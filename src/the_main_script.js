var platform = new H.service.Platform({
  'app_id': 'tzZGI6JfskLhH9t9r0I7',
  'app_code': 'vb_5ylZiTE51r_xX7D9MwQ'
});

//Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });