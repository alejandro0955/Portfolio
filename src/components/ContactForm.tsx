import "./ContactForm.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ContactForm() {
  return (
    <>
      <div className="contact-section">
        <div className="social-media">
          <div className="social-tab">
            <img
              className="social-media-logo"
              src="src/assets/instagram_dark.svg"
            ></img>
          </div>
          <div className="social-tab">
            <img
              className="social-media-logo"
              src="src/assets/linkedin.svg"
            ></img>
          </div>
          <div className="social-tab">
            <img className="social-media-logo" src="src/assets/gmail.svg"></img>
          </div>
          <div className="social-tab">
            <img
              className="social-media-logo"
              src="src/assets/github-dark.svg"
            ></img>
          </div>
        </div>
        <div className="map-container">
          <MapContainer
            center={[25.793449, -80.139198]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", borderRadius: "15px" }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              detectRetina={true}
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
