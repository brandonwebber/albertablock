/**
 * Alberta Block Building
 * Marketing Website
 *
 * @author Emigrant Partners, 2015
 */
(function() {
  /**
   * Setup of the map, powered by Mapbox/Leaflet.
   */
  var Mapbox = L.mapbox;

  Mapbox.accessToken = 'pk.eyJ1Ijoicm9ja2V0cyIsImEiOiIyM2I2NWQ4ZDE2Y2RkMWRlYTgwNWY3NjhlNWEwODYxZCJ9.JFOQm4P8BS70ymTjazN6Zg';
  window.map = Mapbox.map('map', 'mapbox.streets', { zoomControl: false });

  window.map.setView(['53.5409800211682', '-113.50206792354584'], 19);

  window.map.dragging.disable();
  window.map.scrollWheelZoom.disable();
  window.map.touchZoom.disable();
  // window.map.tap.disable();

  window.displayedMarkers = [];

  var highlights = {
    'lifestyle': {
      waypoints: [
        ['53.541437', '-113.500654'],
        ['53.541361', '-113.502104'],
        ['53.540918', '-113.501282'],
        ['53.541361', '-113.502134'],
        ['53.540760', '-113.498693'],
        ['53.541789', '-113.499441']
      ],
      center: ['53.54113941051847', '-113.5004585981369'],
      zoom: 18
    },
    'residential': {
      waypoints: [
        ['53.5430154', '-113.5032441'],
        ['53.5407836', '-113.5079787'],
        ['53.543225', '-113.499664'],
        ['53.5417052', '-113.5064083']
      ],
      center: ['53.54196503774724', '-113.50528120994566'],
      zoom: 17
    },
    'transit': {
      waypoints: [
        ['53.5409823', '-113.5061451'],
        ['53.5410606', '-113.5010208'],
        ['53.5410825', '-113.4982893'],
        ['53.5410825', '-113.4982893'],
        ['53.5409374', '-113.4991976'],
        ['53.5409374', '-113.4991976'],
        ['53.5403939', '-113.5048541']
      ],
      center: ['53.5409800211682', '-113.50206792354584'],
      zoom: 17
    }
  };

  /**
   * Setup of the click targets
   */
  $(".map__feature").on("click", function(e) {
    e.preventDefault();
    var link = $(e.target);

    // remove current markers from map
    for (var i = 0; i < window.displayedMarkers.length; i++) {
      window.map.removeLayer(window.displayedMarkers[i]);
    }

    $('.map__feature--active').removeClass('map__feature--active');
    link.addClass('map__feature--active');

    var highlight = link.data('mapHighlight');
    var feature = highlights[highlight];

    var waypoints = feature.waypoints;
    var center = feature.center;
    var zoom = feature.zoom;
    window.map.setView(center, zoom);

    for (i = 0; i < waypoints.length; i++) {
      var marker = L.marker(waypoints[i]);
      window.displayedMarkers.push(marker);
      marker.addTo(window.map);
    }
  });

  $('.map__feature')[1].click();
})();
