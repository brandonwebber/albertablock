/**
 * Alberta Block Building
 * Marketing Website
 *
 * @author Emigrant Partners, 2015
 */
(function() {
  function scrolling() {
    var lastScrollTop;
    var st = $(window).scrollTop();

    $(".header").each(function(){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        $('.header').removeClass("is-scrolled--up").addClass("is-scrolled--down");
      } else {
        $('.header').removeClass("is-scrolled--down").addClass("is-scrolled--up");
      }
      lastScrollTop = st;

      if ($(window).scrollTop() > 50) {
        $('.header').addClass("is-scrolled");
      } else {
        $('.header').removeClass("is-scrolled");
      }
    });
  }

  scrolling();
  window.addEventListener('scroll', scrolling);

  var map;
  function initMap() {
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
  ]

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.5409305, lng: -113.5019699},
      scrollwheel: false,
      zoom: 15,
      styles: styles
    });
  }
  window.onload = function() {
    initMap();
  }
})();
