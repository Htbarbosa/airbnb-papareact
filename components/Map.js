import { useState } from 'react';
import { getCenter } from 'geolib';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function Map ({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    const coordenates = searchResults.map((result) => ({
        latitude: result.lat,
        longitude: result.long,
    }));

    console.log(selectedLocation);

    const center = getCenter(coordenates);

    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        width: "100%",
        height: "100%",
        zoom: 8
    });


    console.log(center);
    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.mapbox_key}
            mapStyle='mapbox://styles/htbarbosa/cku4kcm811pgq17l4uk9f4snk'
            onViewportChange={(viewport) => setViewport(viewport)}>
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            aria-label="push-pin"
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-pulse"
                        >
                            📌
                        </p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    );
}

export default Map;
