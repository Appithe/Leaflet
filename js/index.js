var lat = document.getElementById('lat');
        var lng = document.getElementById('lng');
        var btnCoords = document.getElementById('btnSubirCoords');

        var mymap = L.map("mapid").setView(
            [21.15223412617155, -101.7113883047542],
            15
        );

        L.tileLayer(
            "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}", {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                subdomains: "abcd",
                minZoom: 0,
                maxZoom: 20,
                ext: "png",
            }
        ).addTo(mymap);

        var salle = L.marker([21.15223412617155, -101.7113883047542]).addTo(
            mymap
        );

        var FIT = L.marker([28.067169188445153, -80.62348334271738]).addTo(mymap);

        var ECIJG = L.marker([4.782822211312334, -74.0414846752721]).addTo(mymap);

        // Poligono
        L.polygon([
                [21.15223412617155, -101.7113883047542],
                [28.067169188445153, -80.62348334271738],
                [4.782822211312334, -74.0414846752721],
            ])
            .addTo(mymap)
            .bindPopup("Zona peligrosa");

        // Figura sobre marcadores
        var circulo = L.circle([21.15223412617155, -101.7113883047542], {
                color: "red",
                fillColor: "#f03",
                fillOpacity: 0.5,
                radius: 1000,
            })
            .addTo(mymap)
            .bindPopup("Universidad de la Salle");

        // Crear marcadores
        btnCoords.addEventListener('click', () => {
            var marcadorNuevo = L.marker([parseInt(lat.value), parseInt(lng.value)]).addTo(mymap);
            lat.value = "";
            lng.value = "";
        });