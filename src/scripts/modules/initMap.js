export const initMap = function(google) {
    const mapCenter = {lat: 59.96356301, lng: 30.26885067};
    const markerPlace = {lat: 59.9597891, lng: 30.266498};

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: mapCenter,
        zoomControl: true,
        mapTypeControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
    });

    const popupContent = '<p class="content">Петровский проспект, 20 <br/> Метро Чкаловская/Спортивная</p>';

    const marker = new google.maps.Marker({
        position: markerPlace,
        map: map,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: popupContent,
    });
    // infoWindow.open(map, marker);
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
};