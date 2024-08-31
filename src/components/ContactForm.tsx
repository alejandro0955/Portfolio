import "./ContactForm.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ContactForm() {
  return (
    <>
      <div className="contact-section">
        <div className="map-container">
          <h3>Find me at</h3>
          <MapContainer
            center={[25.793449, -80.139198]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "88%", borderRadius: "15px" }}
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
        <div className="social-media">
          <h3>My socials</h3>
          <div className="social-tab-container">
            <div className="social-tab">
              <img
                className="social-media-logo"
                src="src/assets/public/instagram_dark.svg"
              ></img>
            </div>
            <div className="social-tab">
              <img
                className="social-media-logo"
                src="src/assets/public/linkedin.svg"
              ></img>
            </div>
            <div className="social-tab">
              <img
                className="social-media-logo"
                src="src/assets/public/gmail.svg"
              ></img>
            </div>
            <div className="social-tab">
              <img
                className="social-media-logo"
                src="src/assets/public/github-dark.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="resume-container">
          <h3>My resume</h3>
          <button className="resume-button">Download</button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
