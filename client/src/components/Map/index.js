import React, { useEffect } from "react";

const Mapquest=({ height, width, center, tileLayer, zoom, apiKey, style }) => {
    useEffect(() => {
        //api key
        window.L.mapquest.key = apiKey

        window.L.mapquest.geocoding().geocode([
            '1339 S 6th Street Philadelphia, PA', 
            '1901 S 9th Street Philadelphia, PA', 
            '30 West Armat Street Philadelphia, PA',
            '511 S 53nd Street Philadelphia PA',
            '313 N 39th Street Philadelphia PA',
            '635 W Girard Ave Philadelphia PA',
            '915 Spring Garden Street Philadelphia PA',
            '3400 Coral Street Philadelphia PA',
            '3831 W Girard Ave Philadelphia PA',
            '1355 E Palmer Street Philadelphia Palmer',
            '1180 Ludlow Street Philadelphia PA'
        ]);

        const map = window.L.mapquest.map("map", {
            center,
            layers: window.L.mapquest.tileLayer(tileLayer),
            zoom,
            style,
        
    });
    map.addControl(window.L.mapquest.control())
}, []);



return (
    <div id="map" style={{ width, height }}>

    </div>
)
}

export default Mapquest;