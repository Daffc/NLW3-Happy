import Leafleft from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';


const mapIcon = Leafleft.icon({
    iconUrl: mapMarkerImg,
    iconSize: [38,68],
    iconAnchor: [19, 68],
    popupAnchor: [160,2]
})

export default mapIcon;