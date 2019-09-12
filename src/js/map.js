var mymap = L.map('mapid').setView([47.24076, 39.71122], 17);
            
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap); 

var parkIcon = L.icon({
    iconUrl: '../icons/park.png',
    iconSize: [16, 16],
    popupAnchor: [0, 0]
});

var hallIcon = L.icon({
    iconUrl: '../icons/hall.png',
    iconSize: [16, 16],
    popupAnchor: [0, 0]
});

var memorialIcon = L.icon({
    iconUrl: '../icons/memorial.png',
    iconSize: [16, 16],
    popupAnchor: [0, 0]
});

var parkingIcon = L.icon({
    iconUrl: '../icons/parking.png',
    iconSize: [16, 16],
    popupAnchor: [0, 0]
});

var playgroundIcon = L.icon({
    iconUrl: '../icons/playground.png',
    iconSize: [16, 16],
    popupAnchor: [0, 0]
});

var skateIcon = L.icon({
    iconUrl: '../icons/skate.png',
    iconSize: [16, 16],
    popupAnchor: [0, 0]
});

var park = L.marker([47.24010, 39.71067], {icon: parkIcon}).addTo(mymap); // парк
park.bindPopup("<h3>Парк ДГТУ</h3><br>Cтуденческий парк").openPopup();  
            
var ridingHall = L.marker([47.24101, 39.71013], {icon: hallIcon}).addTo(mymap); // лёгко-атлетический манеж
ridingHall.bindPopup("Лёгко-атлетический<br> манеж ДГТУ").openPopup(); 

var skate = L.marker([47.23992, 39.70920], {icon: skateIcon}).addTo(mymap); // скейт-парк
skate.bindPopup("<h3>Скейт-парк</h3>").openPopup();  

var memorial = L.marker([47.23927, 39.71041], {icon: memorialIcon}).addTo(mymap); // памятник
memorial.bindPopup("<h3>Памятник</h3><br>Памятник студентам и<br>сотрудникам РИСХМ").openPopup();  

var playground = L.marker([47.24025, 39.71131], {icon: playgroundIcon}).addTo(mymap); // детская площадка
playground.bindPopup("<h3>Детская площадка</h3>").openPopup();  

var parking = L.marker([47.24028, 39.71307], {icon: parkingIcon}).addTo(mymap); // Парковка
parking.bindPopup("<h3>Парковка</h3><br>Парковка для авто").openPopup();