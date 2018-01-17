
document.addEventListener('DOMContentLoaded', function () {

    let lat= 58.004346;
    let lng= 13.829051;

    initMap = () => {
        let uluru = {lat: lat, lng: long};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

    }

});