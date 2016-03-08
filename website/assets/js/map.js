$(function() {

  var map;
  var initMap = function initMap() {
    var styles = [
      {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#ff9500"
              },
              {
                  "saturation": 7
              },
              {
                  "lightness": 19
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#ff0000"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 100
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#ffffff"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 100
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#ffa700"
              },
              {
                  "saturation": -52
              },
              {
                  "lightness": -10
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#ff9500"
              },
              {
                  "saturation": -93
              },
              {
                  "lightness": 31
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#333132"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#fbf7f3"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#c79c60"
              },
              {
                  "saturation": -93
              },
              {
                  "lightness": -2
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#c79c60"
              },
              {
                  "saturation": -52
              },
              {
                  "lightness": -10
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#ffa700"
              },
              {
                  "saturation": 10
              },
              {
                  "lightness": 69
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#c79c60"
              },
              {
                  "saturation": -78
              },
              {
                  "lightness": 67
              },
              {
                  "visibility": "simplified"
              }
          ]
      }
    ];

    var markers = {
      'Alberta Block': {
        'Alberta Block': [53.5415, -113.50197],
      },
      'Restaurant': {
        'Red Star': [53.541124, -113.502191],
        'I Love Sushi': [53.541444, -113.501295],
        'MKRT': [53.541146, -113.502084],
        'Corso 32': [53.540898, -113.498769],
        'Bar Bricco': [53.540898, -113.498844],
        'TZIN Wine & Tapas': [53.541385, -113.499021],
        'Blue Plate Diner': [53.541845, -113.499048],
        'Dauphine Bakery and Bistro': [53.541570, -113.499053],
        'Pub 1905': [53.540885, -113.501971],
      },
      'Coffee Shop': {
        'Coffee Bureau': [53.540943, -113.501413],
        'Credo Coffee': [53.541881, -113.499472],
        'Lock Stock Coffee': [53.541142, -113.502143],
      },
      'Hotel': {
        'Matrix Hotel': [53.539005, -113.504466],
        'Days Inn Edmonton': [53.539830, -113.502738],
        'Holiday Inn': [53.539108, -113.499740],
      },
      'Business Centre': {
        'Standard Life Centre': [53.540740, -113.499718],
      },
      'Liquor Store': {
        'deVine Wines & Spirits': [53.541385, -113.499021],
      },
      'Bank': {
        'HSBC': [53.540794, -113.502706],
      },
      'Car Rental': {
        'Budget Rent A Car': [53.539262, -113.503130],
      },
      'Auto Shop': {
        'Fountain Tire': [53.542819, -113.501596],
      },
      'Parking': {
        'Impark': [53.542043, -113.502824],
      },
      'Hair Stylist': {
        'Blunt Salon': [53.541881, -113.499472],
      },
      'Art Gallery': {
        'Alberta Craft Council': [53.542873, -113.503232],
        'Latitude 53': [53.542873, -113.503232],
      },
      'Park': {
        'Beaver Hills House Park': [53.541538, -113.500684],
      },
      'Bus Stop': {
        'Bus stop': [53.541561, -113.500979],
        'Bus stop': [53.541394, -113.504648],
        'Bus stop': [53.540335, -113.504857],
        'Bus stop': [53.540930, -113.500239],
        'Bus stop': [53.542629, -113.501231],
      },
      'LRT Station': {
        'Bay Enterprise Square Station': [53.541182, -113.499150],
        'Corona Station': [53.540817, -113.504509]
      },
      'Condo': {
        'Liberty on Jasper': [53.541155, -113.501419],
        'Icon 1': [53.541971, -113.499793],
        'Icon 2': [53.542517, -113.499767],
        'Fox Tower 1': [53.543901, -113.499810]
      }
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.5414, lng: -113.50187},
      scrollwheel: false,
      zoom: 17,
      styles: styles,
    });

    // Dual Circle
    var albertaBlockIconPath = 'M34.43,51.14 C43.5636673,51.1400009 51.7977866,56.6425239 55.2921548,65.0813194 C58.7865231,73.5201149 56.8528406,83.2329596 50.3929322,89.690007 C43.9330238,96.1470545 34.2193235,98.0764344 25.7820768,94.5783284 C17.34483,91.0802223 11.845955,82.8436664 11.85,73.71 C11.861027,61.2439807 21.9639807,51.141027 34.43,51.13 L34.43,51.14 Z M34.43,47.13 C19.7502713,47.13 7.85,59.0302713 7.85,73.71 C7.85,88.3897287 19.7502713,100.29 34.43,100.29 C49.1097287,100.29 61.01,88.3897287 61.01,73.71 C61.01,66.6605457 58.2096152,59.8998187 53.2248982,54.9151018 C48.2401813,49.9303848 41.4794543,47.13 34.43,47.13 L34.43,47.13 L34.43,47.13 Z M34.43,90.65 C43.7801808,90.65 51.36,83.0701808 51.36,73.72 C51.36,64.3698192 43.7801808,56.79 34.43,56.79 C25.0798192,56.79 17.5,64.3698192 17.5,73.72 C17.5,83.0701808 25.0798192,90.65 34.43,90.65 Z';
    // London Underground
    var lrtStopIconPath =      'M17.9779951,0 C8.10220049,0 0.02200489,1.10412371 0.02200489,8.83298969 L0.02200489,29.8113402 C0.02200489,34.0070103 3.61320293,37.5402062 7.87775061,37.5402062 L4.51100244,40.8525773 L4.51100244,41.956701 L31.4449878,41.956701 L31.4449878,40.8525773 L28.0782396,37.5402062 C32.3427873,37.5402062 35.9339853,34.0070103 35.9339853,29.8113402 L35.9339853,8.83298969 C35.9339853,1.10412371 27.8537897,0 17.9779951,0 L17.9779951,0 Z M7.87775061,33.1237113 C6.08215159,33.1237113 4.51100244,31.5779381 4.51100244,29.8113402 C4.51100244,28.0447423 6.08215159,26.4989691 7.87775061,26.4989691 C9.67334963,26.4989691 11.2444988,28.0447423 11.2444988,29.8113402 C11.2444988,31.5779381 9.67334963,33.1237113 7.87775061,33.1237113 L7.87775061,33.1237113 Z M15.7334963,19.8742268 L4.51100244,19.8742268 L4.51100244,8.83298969 L15.7334963,8.83298969 L15.7334963,19.8742268 L15.7334963,19.8742268 Z M28.0782396,33.1237113 C26.2826406,33.1237113 24.7114914,31.5779381 24.7114914,29.8113402 C24.7114914,28.0447423 26.2826406,26.4989691 28.0782396,26.4989691 C29.8738386,26.4989691 31.4449878,28.0447423 31.4449878,29.8113402 C31.4449878,31.5779381 29.8738386,33.1237113 28.0782396,33.1237113 L28.0782396,33.1237113 Z M31.4449878,19.8742268 L20.2224939,19.8742268 L20.2224939,8.83298969 L31.4449878,8.83298969 L31.4449878,19.8742268 L31.4449878,19.8742268 Z';
    // Triangle
    var serviceIconPath =      'M21.31,8.05 L28.31,20.05 L35.31,32.05 L7.4,32.05 L14.4,20.05 L21.4,8.05 L21.31,8.05 Z M21.4,0.05 L10.98,18.05 L0.56,36.05 L42.18,36.05 L31.76,18.05 L21.34,0.05 L21.34,0.05 L21.4,0.05 Z';
    // Circle
    var restaurantIconPath =   'M18.29,4.93 C26.1158749,4.93 32.46,11.2741251 32.46,19.1 C32.46,26.9258749 26.1158749,33.27 18.29,33.27 C10.4641251,33.27 4.12,26.9258749 4.12,19.1 C4.1255154,11.2764108 10.4664108,4.9355154 18.29,4.93 L18.29,4.93 Z M18.29,0.93 C8.2549861,0.93 0.12,9.0649861 0.12,19.1 C0.12,29.1350139 8.2549861,37.27 18.29,37.27 C28.3250139,37.27 36.46,29.1350139 36.46,19.1 C36.46,9.0649861 28.3250139,0.93 18.29,0.93 L18.29,0.93 L18.29,0.93 Z';
    // Square
    var residentialIconPath =  'M32.31,4.1 L32.31,32.1 L4.31,32.1 L4.31,4.1 L32.31,4.1 L32.31,4.1 Z M36.31,0.1 L0.31,0.1 L0.31,36.1 L36.31,36.1 L36.31,0.1 L36.31,0.1 L36.31,0.1 Z';
    // Bus
    var busStopIconPath =      'M29.44,0.52 L7.94,0.52 C3.84204716,0.52 0.52,3.84204716 0.52,7.94 L0.52,26.94 C0.521883882,30.6215204 3.22634178,33.7433592 6.87,34.27 L6.87,34.34 C6.87,35.016302 7.13865994,35.6649045 7.61687771,36.1431223 C8.09509547,36.6213401 8.74369795,36.89 9.42,36.89 L11.48,36.89 C12.8844301,36.8900108 14.0244924,35.7544193 14.03,34.35 L23.33,34.35 C23.3355076,35.7544193 24.4755699,36.8900108 25.88,36.89 L27.94,36.89 C29.3483261,36.89 30.49,35.7483261 30.49,34.34 L30.49,34.27 C34.1336582,33.7433592 36.8381161,30.6215204 36.84,26.94 L36.84,7.94 C36.8400149,3.84984495 33.5301402,0.531024677 29.44,0.52 L29.44,0.52 Z M14.04,25.12 C14.04,26.5283261 12.8983261,27.67 11.49,27.67 L9.43,27.67 C8.02167389,27.67 6.88,26.5283261 6.88,25.12 L6.88,23.06 C6.88,21.6516739 8.02167389,20.51 9.43,20.51 L11.49,20.51 C12.8983261,20.51 14.04,21.6516739 14.04,23.06 L14.04,25.12 L14.04,25.12 Z M30.51,25.12 C30.51,26.5283261 29.3683261,27.67 27.96,27.67 L25.9,27.67 C24.4916739,27.67 23.35,26.5283261 23.35,25.12 L23.35,23.06 C23.35,21.6516739 24.4916739,20.51 25.9,20.51 L27.96,20.51 C29.3683261,20.51 30.51,21.6516739 30.51,23.06 L30.51,25.12 L30.51,25.12 Z M30.51,11.79 C30.51,13.203849 29.363849,14.35 27.95,14.35 L9.44,14.35 C8.02615104,14.35 6.88,13.203849 6.88,11.79 L6.88,9.79 C6.88,8.37615104 8.02615104,7.23 9.44,7.23 L27.95,7.23 C29.363849,7.23 30.51,8.37615104 30.51,9.79 L30.51,11.79 L30.51,11.79 Z';

    var icons = {
      'Alberta Block': albertaBlockIconPath,
      'Restaurant': restaurantIconPath,
      'Coffee Shop': serviceIconPath,
      'Hotel': serviceIconPath,
      'Business Centre': serviceIconPath,
      'Liquor Store': serviceIconPath,
      'Bank': serviceIconPath,
      'Car Rental': serviceIconPath,
      'Auto Shop': serviceIconPath,
      'Parking': serviceIconPath,
      'Hair Stylist': serviceIconPath,
      'Art Gallery': serviceIconPath,
      'Park': serviceIconPath,
      'Bus Stop': busStopIconPath,
      'LRT Station': lrtStopIconPath,
      'Condo': residentialIconPath,
    }

    var createMarker = function createMarker(locationName, locationType, coordinates) {

      var icon = {
        path: icons[locationType],
        fillColor: '#b59964',
        scale: 0.6,
        opacity: 0.5,
        fillOpacity: 1,
        strokeWeight: 0,
      };

      var locationTitle = locationType + ' — ' + locationName;
      if (locationType === 'Alberta Block') {
        locationTitle = 'Alberta Block';
        icon.scale = 0.8;
      }

      var infoWindow = new google.maps.InfoWindow({ content: locationTitle });

      var marker = new google.maps.Marker({
        position: { lat: coordinates[0], lng: coordinates[1] },
        map: map,
        icon: icon,
      });

      marker.addListener('mouseover', function() {
        infoWindow.open(map, marker);
      });
      marker.addListener('mouseout', function() {
        infoWindow.close();
      });
    }

    for (var locationType in markers) {
      for (var locationName in markers[locationType]) {
        var coordinates = markers[locationType][locationName];
        createMarker(locationName, locationType, coordinates);
      }
    }
  }

  initMap();
})
