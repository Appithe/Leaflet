
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
    var popupContent = "Soy un " + feature.geometry.type + " en lasalle";

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

// Practica 2
var markers = [];
var polyLine;
var createdLine = false;

// borrar marcadores repetidos
function filterArray(inputArr) {
    var found = {};
    var out = inputArr.filter(function(element){
        return found.hasOwnProperty(element)? false : (found[element]=true);
    });
    return out;
}

function createLine(pointOne, pointTwo) {
    polyLine = L.polyline([pointOne,pointTwo], { color: 'black' }).addTo(mymap);
}

function onMapDoubleClick(e) {

    if(createdLine){
        polyLine.remove();
        createdLine = false;
    }

    marker1 = L.marker(e.latlng)
        .addTo(mymap)
        .bindPopup("You clicked the map at " + e.latlng.toString());
    markers.push(marker1._latlng);

    var filteredMarkers = filterArray(markers);

    var pointOne = filteredMarkers[filteredMarkers.length - 2];
    var pointTwo = filteredMarkers[filteredMarkers.length - 1];

    if(!createdLine){
        createLine(pointOne,pointTwo);
        createdLine = true;
    }
}

function onMapClick(e) {
    marker2 = L.marker(e.latlng)
        .addTo(mymap)
        .bindPopup("You clicked the map at " + e.latlng.toString());
    markers.push(marker2._latlng);
}

mymap.on("click", onMapClick);
mymap.on("dblclick", onMapDoubleClick);