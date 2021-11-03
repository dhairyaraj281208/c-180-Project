// window.location.href is used for extracting current web page url


let latitude, longitude, place;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `weather.html?src=$place=${place.lat};${place.lng}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry Bro, Your Waste browser does not support Geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude
    console.log(position)

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
    });

    var locate = document.querySelector("#locate")

    var marker = new mapboxgl.Marker({
        element: locate
    })
        .setLngLat([longitude, latitude])
        .addTo(map);

    // Selecting all Images

    var img1 = document.querySelector('#amber')
    var img2 = document.querySelector('#gateway')
    var img3 = document.querySelector('#gate')
    var img5 = document.querySelector('#victoria')
    var img4 = document.querySelector('#lotus')

    // var map = document.querySelector("#map")

    // Adding Markers

    var marker1 = new mapboxgl.Marker({
        element: img1
    })
        .setLngLat([75.85125952796238, 26.986059869852816])
        .addTo(map);


    var marker2 = new mapboxgl.Marker({
        element: img2
    })
        .setLngLat([72.83474008679661, 18.922714625569103])
        .addTo(map);


    var marker3 = new mapboxgl.Marker({
        element: img3
    })
        .setLngLat([77.22968132063244, 28.613815898366166])
        .addTo(map);


    var marker4 = new mapboxgl.Marker({
        element: img4
    })
        .setLngLat([77.25865469786645, 28.553793283581882])
        .addTo(map);


    var marker5 = new mapboxgl.Marker({
        element: img5
    })
        .setLngLat([88.34255775714644, 22.54524395573212])
        .addTo(map);


    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    map.on('click', function (e) {
        place = e.lngLat;
    });
}

