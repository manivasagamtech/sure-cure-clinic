import { clinic } from "../data/clinicData.js";

export default function Footer({ onBook }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{clinic.name}</strong>
          <p>{clinic.addressLines.join(", ")}</p>
          <a href={clinic.phoneHref}>Call {clinic.phoneDisplay}</a>
        </div>
        <button type="button" onClick={onBook}>
          Book appointment
        </button>
      </div>
    </footer>
  );
}
