var mymap = L.map('secondmap').setView([-25.82, 134.824], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'tedtacular.254plo1l',
    accessToken: 'pk.eyJ1IjoidGVkdGFjdWxhciIsImEiOiJjaXZqcW54Y3MwMDYwMnpwNTZxbWppbWY3In0.IUhLsV45HK4BvGRn4Jkppg'
}).addTo(mymap);

for (var i=0; i < places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>' + '<img src="' + places[i].images + 'alt="">')
  .addTo ( mymap );
}
