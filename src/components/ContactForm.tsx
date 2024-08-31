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
            center={[25.761681, -80.191788]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "88%", borderRadius: "15px" }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
              detectRetina={true}
              accessToken="2PBJFDocqp0lVQozpP1FPY688hUv65wjP15jjW6bmu5MwCXWqlLVmfWNMHS9G1N1"
            />
          </MapContainer>
        </div>
        <div className="social-media">
          <h3>My socials</h3>
          <div className="social-tab-container">
            <div className="social-tab">
              <img
                className="social-media-logo"
                src="/instagram_dark.svg"
              ></img>
            </div>
            <div className="social-tab">
              <img className="social-media-logo" src="/linkedin.svg"></img>
            </div>
            <div className="social-tab">
              <img className="social-media-logo" src="/gmail.svg"></img>
            </div>
            <div className="social-tab">
              <img className="social-media-logo" src="/github-dark.svg"></img>
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
