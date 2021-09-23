
var mymap = L.map("mapid").setView(
    [21.152364203854884, -101.71115227036523],
    16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var salle = L.marker([21.15223412617155, -101.7113883047542]).addTo(mymap);

function onEachFeature(feature, layer) {
    var popupContent = "Soy un " + feature.geometry.type + " en la salle";

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

L.geoJSON(lasalle, {
    filter: function (feature, layer) {
        if (feature.properties) {
            return true;
        }
    },
    onEachFeature: onEachFeature,
}).addTo(mymap);

var marker = L.marker([21.15223412617155, -101.7113883047542])
    .addTo(mymap)
    .bindPopup("Holi");