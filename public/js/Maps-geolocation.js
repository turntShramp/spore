        // Note: This example requires that you consent to location sharing when
        // prompted by your browser. If you see the error "The Geolocation service
        // failed.", it means you probably did not give permission for the browser to
        // locate you.
        var map, infoWindow;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 39.833333, lng: -98.583333},
            zoom: 6
          });
          infoWindow = new google.maps.InfoWindow;

          //HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
          //The intial position of the map covers the entire continental US
              infoWindow.setPosition(pos);
              infoWindow.setContent('Your current location.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
          // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        }
          //Collects the postion of the device and passes the values to the map window and zooms to the location
          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }
        /*
          // Create a <script> tag and set the USGS URL as the source.
          var script = document.createElement('script');
          // This example uses a local copy of the GeoJSON stored at
          // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
          script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
          document.getElementsByTagName('head')[0].appendChild(script);
        }
  
        // Loop through the results array and place a marker for each
        // set of coordinates.
        window.eqfeed_callback = function(results) {
          for (var i = 0; i < results.features.length; i++) {
            var coords = results.features[i].geometry.coordinates;
            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
              position: latLng,
              map: map
            });
          }
        }
          */
        
  
  
  
  
  
  
  
  
  