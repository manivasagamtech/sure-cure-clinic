import { clinic } from "../data/clinicData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{clinic.name}</strong>
          <p>{clinic.location}</p>
        </div>
        <a href="#appointment">Book appointment</a>
      </div>
    </footer>
  );
}
