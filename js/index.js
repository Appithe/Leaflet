var lat = document.getElementById('lat');
var lng = document.getElementById('lng');
var nombreLugar = document.getElementById('nombre')
var btnCoords = document.getElementById('btnSubirCoords');

var mymap = L.map("mapid").setView(
    [21.01581464273601, -101.25292611589512],
    15
);

var lugares = [
    {
        "nombre": "Plaza Galereña",
        "lat": 20.987905245349697, 
        "lng": -101.28424742853517
    },
    {
        "nombre": "Centro de guanajuato",
        "lat": 21.01581464273601,
        "lng": -101.25292611589512
    },
    {
        "nombre": "Alaia guanajuato",
        "lat": 20.97443943694084,
        "lng": -101.279534597727
    },

]

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}
).addTo(mymap);

// Cargar marcadores
cargarMarcadores = () => {
    lugares.forEach(lugar => {
        L.marker([lugar.lat, lugar.lng]).addTo(mymap).bindPopup(lugar.nombre);
    });
}

window.onload = cargarMarcadores();

// Crear marcador nuevo
btnCoords.addEventListener('click', () => {
    lugar = {
        nombre: nombreLugar.value,
        lat: lat.value,
        lng: lng.value
    }
    nombreLugar.value = "";
    lat.value = "";
    lng.value = "";
    lugares.push(lugar);
    cargarMarcadores();
});

// Poligono
L.polygon(lugares)
    .addTo(mymap)
    .bindPopup("Zona peligrosa");

// Figura sobre marcadores
var circulo = L.circle([21.01581464273601, -101.25292611589512], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 250,
})
    .addTo(mymap)
    .bindPopup("Centro de guanajuato");