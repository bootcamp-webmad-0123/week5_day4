navigator.geolocation.getCurrentPosition(
    position => setMapCenter(position),
    error => console.log('HA HABIDO UN ERROR', error)
)

let myMap, ironhackCoords = { lat: 10.392521370648154, lng: - 3.6989879718518366 }

function initMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 15,
            center: ironhackCoords,
            styles: mapStyles.retro
        }
    )
}

const setMapCenter = ({ coords }) => {

    const { latitude: lat, longitude: lng } = coords

    myMap.setCenter({ lat, lng })

    new google.maps.Marker({
        map: myMap,
        position: { lat, lng }
    })

}