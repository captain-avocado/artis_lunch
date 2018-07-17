export const initMap = function(google) {
    const mapCenter = {lat: 59.927270, lng: 30.336667};

    new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: mapCenter,
        // styles: mapStyle,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
        scaleControl: false,
        fullscreenControl: false,
    });
};