import React from 'react';
import { GoogleMap } from "react-google-maps";

function Map() {
    return <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 12, lng: 12 }}
    />
}

export default function App() {
    return <div>map here</div>
}