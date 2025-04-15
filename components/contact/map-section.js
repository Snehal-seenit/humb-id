import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

export default function MapSection({ location = { lat: 0, lng: 0, address: "Unknown" }, zoomLevel = 10 }) {
	return (
		<div className="fugu-map">
			<div id="map" style={{ height: "400px", width: "100%" }}>
				<GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}>
					<LocationPin lat={location.lat} lng={location.lng} text={location.address} />
				</GoogleMapReact>
			</div>
		</div>
	);
}
