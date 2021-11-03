let coordinates = {}

$(document).ready(function () {
    get_coordinates()
    getWeather()
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)

    if (searchParams.has('src') && searchParams.has('place')) {
        let destination = searchParams.get('place')
        coordinates.place_lat = place.split(";")[0]
        coordinates.place_lng = place.split(";")[1]
        console.log(coordinates)

    }
    else {
        alert("Coordinates not selected. Please Select them to Continue.")
        window.history.back
    }
}

function getWeather() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.place_lat}&lon=${coordinates.place_lng}&appid=94212e971d0ca977303f8ae892224bbd`,
        type: "get",
        success: function (response) {
            let name = response.name;
            let weather = response.weather[0].main;
            $("scene_container").append(

                `<a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]};longitude: ${steps[i].maneuver.location[0]};">
                    <a-entity>
                        <a-text height="50" value="Weather forcast is ${weather} as ${name}"></a-text>
                    </a-entity>
                </a-entity>`
            )
        }
    })
}