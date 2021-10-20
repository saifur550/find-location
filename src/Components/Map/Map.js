import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 3.174610,
    lng: 101.659622
};



const Map = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col text-center py-2">
                        <h2 className="fw-bold text-primary">
                            My Google Map
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <LoadScript
                            googleMapsApiKey="AIzaSyBBgkAzv8jrHOG5Dj14P2tyk0amSJvfQyA"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;